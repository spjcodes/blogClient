import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BlogArticle} from '../../../model/blogarticle';
import {BlogarticleserService} from '../../../service/blogarticleser.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EditorConfig} from '../../../editor/model/editor-config';


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
  protected editContent = '';

  mdconf = new EditorConfig();
  markdown = '测试语句';

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


  onFileChanged($event: Event) {

  }

  onUpload() {

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
    alert(this.patament);
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
