import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticletypeService} from '../../../service/articletype.service';
import {BlogArticleTypes} from '../../../model/BlogArticleTypes';
import {ResponseBody} from '../../../model/responseBody';

@Component({
  selector: 'app-edittype',
  templateUrl: './edittype.component.html',
  styleUrls: ['./edittype.component.css']
})
export class EdittypeComponent implements OnInit {

  parament: string;
  articleType: BlogArticleTypes;
  private selectedFile: any;

  constructor(private router: Router, private activeRouter: ActivatedRoute, private typeSer: ArticletypeService) { }

  ngOnInit() {
    this.initArticleType();
 }

  initArticleType() {
   this.parament = this.activeRouter.snapshot.params['id'];
   if (this.parament === 'add') {
     this.articleType = new BlogArticleTypes();
   } else {
     this.typeSer.getTypeById(this.parament).then ((data: ResponseBody) => {
       if (data.status === 'successful') {
         this.articleType = data.object;
       } else {
         alert('erro:' + data.object);
       }
     });
   }
  }

  save() {
    if (this.parament === 'add') {
      this.typeSer.addArticleType(this.articleType).then((data: ResponseBody) => {
        if (data.status === 'successful') {
          this.router.navigate(['/manageIndex/typesManage']);
        } else {
          alert('erro:保存失败!, debug咯');
        }
      });
    } else {
      this.typeSer.updateArticleType(this.articleType).then((data: ResponseBody) => {
        if (data.status === 'successful') {
          this.router.navigate(['/manageIndex/typesManage']);
        } else {
          alert('erro:修改失败!, debug咯');
        }
      });
    }

  }

  reset() {
    this.articleType.icon = null;
    this.articleType.typename = null;
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload(bolgcover: string) {
    const uploadData = new FormData();
    uploadData.append('multFile', this.selectedFile);
    this.typeSer.uploadFile(this.articleType.icon, uploadData).subscribe(
      (data: any) => {
        if (data !== null) {
          this.articleType.icon = 'http://localhost:8080/pic/' + data.object.fileName;
        }
      });
  }
}
