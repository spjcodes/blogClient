import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogarticleserService} from '../../../../service/blogarticleser.service';
import {ResponseBody} from '../../../../model/responseBody';
import {BlogArticle} from '../../../../model/blogarticle';
import {Mdconfig} from '../../../../mdeditor/config/mdconfig';

declare var editormd: any;

@Component({
  selector: 'app-showcontent',
  templateUrl: './showcontent.component.html',
  styleUrls: ['./showcontent.component.css']
})
export class ShowcontentComponent implements OnInit {

  parameter: string;
  artice: BlogArticle;
  editormd: any;
  conf = new Mdconfig();
  private testView: any;


  constructor(private activeRouter: ActivatedRoute, private  ariSer: BlogarticleserService) { }

  ngOnInit() {

    this.initArticle();
  }

  private initArticle() {
    this.parameter = this.activeRouter.snapshot.params['id'];
    this.ariSer.getBlogArticleById(this.parameter).then((data: ResponseBody) => {
      if (data.status === 'successful') {
        this.artice = data.object;



        this.conf.markdown = this.artice.content;
        editormd.markdownToHTML('detailmarkdown', this.conf);

      } else {
        alert('erro:' + data.object);
      }
    });
  }

}
