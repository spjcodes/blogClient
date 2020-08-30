import { Component, OnInit } from '@angular/core';
import {BlogarticleserService} from '../../../service/blogarticleser.service';
import {BlogArticle} from '../../../model/blogarticle';
import {ResponseBody} from '../../../model/responseBody';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rightarea',
  templateUrl: './rightarea.component.html',
  styleUrls: ['./rightarea.component.css']
})
export class RightareaComponent implements OnInit {

  blogArticleList: Array<BlogArticle>;
  constructor(private blogArtSer: BlogarticleserService, private router: Router) { }

  ngOnInit() {
    this.initBlogArticleList();
  }

  private initBlogArticleList() {
    this.blogArtSer.getBlogArticleList().then((data: any) => {
      if (data.status === 'successful') {
        this.blogArticleList = new Array<BlogArticle>();
        this.blogArticleList = data.object;
      } else {
        alert('获取博文信息失败！！');
      }
    });
  }

  toInfo(id: string) {

    this.blogArtSer.visitsCount(id);
    this.router.navigate(['showContent', id]);
  }
}
