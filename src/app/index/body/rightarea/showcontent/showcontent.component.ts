import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogarticleserService} from '../../../../service/blogarticleser.service';
import {ResponseBody} from '../../../../model/responseBody';
import {BlogArticle} from '../../../../model/blogarticle';

@Component({
  selector: 'app-showcontent',
  templateUrl: './showcontent.component.html',
  styleUrls: ['./showcontent.component.css']
})
export class ShowcontentComponent implements OnInit {

  parameter: string;
  artice: BlogArticle;


  constructor(private activeRouter: ActivatedRoute, private  ariSer: BlogarticleserService) { }

  ngOnInit() {

    this.initArticle();
  }

  private initArticle() {
    this.parameter = this.activeRouter.snapshot.params['id'];
    this.ariSer.getBlogArticleById(this.parameter).then((data: ResponseBody) => {
      if (data.status === 'successful') {
        this.artice = data.object;
      } else {
        alert('erro:' + data.object);
      }
    });
  }
}
