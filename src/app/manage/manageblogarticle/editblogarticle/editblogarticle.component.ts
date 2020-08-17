import {Component, OnInit} from '@angular/core';
import {BlogArticle} from '../../../model/blogarticle';
import {BlogarticleserService} from '../../../service/blogarticleser.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Mdconfig} from '../../../mdeditor/config/mdconfig';
import {HttpErrorResponse} from '@angular/common/http';
import {Subscription} from 'rxjs/Subscription';
import {ResponseBody} from '../../../model/responseBody';


@Component({
  selector: 'app-editblogarticle',
  templateUrl: './editblogarticle.component.html',
  styleUrls: ['./editblogarticle.component.css']
})

export class EditblogarticleComponent implements OnInit {

  ck: boolean;
  md: boolean;
  article: BlogArticle;
  patament: string;
  private selectedFile: string;


  // ckedit配置
  protected  config: any = {
    uiColor: '#d0f8ce',   // 编辑框背景色
    language: 'zh-cn',  // 显示语言
    toolbarCanCollapse: true,  // 是否可收缩功能栏
    toolbar: [ ['Maximize'], [ 'Undo', 'Redo', '-', 'Cut', 'Copy', 'Paste', 'PasteText',
      'PasteFromWord', '-', 'Link', 'Unlink', 'Anchor', '-', 'Image', 'Table', 'HorizontalRule',
      'Smiley', 'SpecialChar', '-', 'Source'], ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript',
      'Superscript', '-', 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'], ['Styles',
      'Format', 'Font', 'FontSize'] ]  // 工具部分
  };

  // makeDown 编辑器配置
  mdconf = new Mdconfig();
  markdown = '测试语句';
  private str: string;

  constructor(private artSer: BlogarticleserService, private activeRouter: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.initArticle();
    this.mdistrue();
  }

  // 同步属性内容
  syncModel(str): void {
    this.article.content = str;
  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload(bolgcover: string) {
    const uploadData = new FormData();
    uploadData.append('multFile', this.selectedFile);
    this.artSer.uploadFile(this.article.bolgcover, uploadData).subscribe(
      (data: any) => {
      if (data !== null) {
        this.article.bolgcover = 'http://localhost:8080/pic/' + data.object.fileName;
      }
      console.dir(this.article.bolgcover);
    });
  }

  save(article: BlogArticle) {

  }

  reset() {
    this.article.title = '';
    this.article.intro = '';
    this.article.bolgcover = '';
    this.article.typeid = '';
    this.article.iscomment = 0;
    this.article.isoriginal = 0;
    this.article.createtime = '';
    this.article.isuseful = 0;
  }

  private initArticle() {
    this.patament = this.activeRouter.snapshot.params['id'];
    if (this.patament === 'add') {
      this.article = new BlogArticle();
    } else {
      /*this.article = this.getArticle(this.patament);*/
      this.getArticle(this.patament);
    }
  }

  private getArticle(id: string) {
    this.artSer.getBlogArticleById(id).then((data: any) => {
      if (data.status !== 'faild') {
        this.article =  data.object;
      }
    });
  }


  ckistrue() {
    this.ck = true;
    this.md = false;
  }

  mdistrue() {
    this.md = true;
    this.ck = false;
  }


}
