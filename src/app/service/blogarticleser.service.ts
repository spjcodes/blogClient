import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';
import {BlogArticle} from '../model/blogarticle';

@Injectable()
export class BlogarticleserService {

  constructor(private config: ConfigService, private http: HttpClient) {
  }

  private getBlogArticleListURL = this.config.getHost() + 'blogArticle/getBlogArticleList';
  getBlogArticleList() {
    console.dir(this.getBlogArticleListURL);
    return this.http.get(this.getBlogArticleListURL).toPromise();
  }

  private addArticleURL = this.config.getHost() + 'blogArticle/addBlogArticle';
  addArticle(blogArticle: BlogArticle) {
    let p = {
      'id': blogArticle.id,
      'title': blogArticle.title ,
      'intro': blogArticle.intro ,
      'bolgcover': blogArticle.bolgcover,
      'iscomment': blogArticle.iscomment,
      'isoriginal': blogArticle.isoriginal,
      'createtime': blogArticle.createtime,
      'isuseful':  blogArticle.isuseful
    }
    return this.http.post(this.addArticleURL, p);
  }

  private getBlogArticleURL = this.config.getHost() + 'blogArticle/getBlogsArtcleById';
  getBlogArticleById(id: string) {
    return this.http.post(this.getBlogArticleURL, {'id': id}).toPromise();
  }

  private deleteArtByIdURL = this.config.getHost() + 'blogArticle/deleteBlogArtcle';
  deleteArtById(id: string) {
    return this.http.post(this.deleteArtByIdURL, {'id': id}).toPromise();
  }
}
