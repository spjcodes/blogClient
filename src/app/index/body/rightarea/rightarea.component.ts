import { Component, OnInit } from '@angular/core';
import {BlogarticleserService} from '../../../service/blogarticleser.service';
import {BlogArticle} from '../../../model/blogarticle';
import {ResponseBody} from '../../../model/responseBody';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';

@Component({
  selector: 'app-rightarea',
  templateUrl: './rightarea.component.html',
  styleUrls: ['./rightarea.component.css']
})
export class RightareaComponent implements OnInit {

  blogArticleList: Array<BlogArticle>;
  param: string;
  constructor(private blogArtSer: BlogarticleserService, private router: Router,
              private routeInfo: ActivatedRoute) {

    this.router.events.subscribe((event: any) => {
      if (event instanceof  NavigationEnd) {
        // console.log(event);
       this.initBlogArticleList();
      }
    });
  }

  ngOnInit() {
   /* this.initBlogArticleList();
    console.dir(this.param);*/
  }

  private initBlogArticleList() {
    this.routeInfo.params.subscribe((params: Params) => this.param = params['id']);
    if (this.param === undefined) {
      this.blogArtSer.getBlogArticleList().then((data: any) => {
        if (data.status === 'successful') {
          this.blogArticleList = new Array<BlogArticle>();
          this.blogArticleList = data.object;
        } else {
          alert('网络错误！ 获取博文信息失败！！');
        }
      });
    } else {
      this.blogArtSer.getBlogArticleByType(this.param).then((data: ResponseBody) => {
        if (data.status === 'successful') {
          this.blogArticleList = data.object;
        } else {
          alert('network erro !');
        }
      });
    }
  }

  toInfo(id: string) {

    this.blogArtSer.visitsCount(id);
    this.router.navigate(['showContent', id]);
  }
}
