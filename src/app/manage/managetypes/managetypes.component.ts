import { Component, OnInit } from '@angular/core';
import {BlogArticleTypes} from '../../model/BlogArticleTypes';
import {ArticletypeService} from '../../service/articletype.service';
import {HttpClient} from '@angular/common/http';
import {ResponseBody} from '../../model/responseBody';
import {Router} from '@angular/router';

@Component({
  selector: 'app-managetypes',
  templateUrl: './managetypes.component.html',
  styleUrls: ['./managetypes.component.css']
})
export class ManagetypesComponent implements OnInit {

  typeList: Array<BlogArticleTypes>;
  
  

  constructor(private typeSer: ArticletypeService, private router: Router) { }

  ngOnInit() {
    this.initTypeList();
  }

  updateType(id: string) {
    this.router.navigate(['./manageIndex/editType', id]);
  }

  deleteType(id: string) {
    this.typeSer.deleteTypeById(id).then((data: ResponseBody) => {
      if (data.status === 'successful') {
        this.initTypeList();
      } else {
        alert('erro; ' + data.object);
      }
    });
  }

  createNewType() {
    this.router.navigate(['./manageIndex/editType', 'add']);
  }

  private initTypeList() {
    this.typeSer.getTypeList().then((data: any) => {
      if (data.status === 'successful') {
        this.typeList = new Array<BlogArticleTypes>();
        this.typeList = data.object;
      }
    });
  }
}
