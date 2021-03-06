import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BlogArticle} from '../model/blogarticle';

@Injectable()
export class BlogarticleserService {

  constructor(private config: ConfigService, private http: HttpClient) {
  }
  str: string;

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
      'typeid': blogArticle.typeid,
      'content': blogArticle.content,
      'iscomment': blogArticle.iscomment,
      'isoriginal': blogArticle.isoriginal,
      'createtime': blogArticle.createtime,
      'isuseful':  blogArticle.isuseful
    }
    return this.http.post(this.addArticleURL, p).toPromise();
  }

  private getBlogArticleURL = this.config.getHost() + 'blogArticle/getBlogsArtcleById';
  getBlogArticleById(id: string) {
    return this.http.post(this.getBlogArticleURL, {'id': id}).toPromise();
  }

  private deleteArtByIdURL = this.config.getHost() + 'blogArticle/deleteBlogArtcle';
  deleteArtById(id: string) {
    return this.http.post(this.deleteArtByIdURL, {'id': id}).toPromise();
  }

  private fileUploadURL = this.config.getHost() + 'blogArticle/uploadFile';
  uploadFile(bolgcover: string, uploadData: FormData) {
    return this.http.post(this.fileUploadURL, uploadData);
    /*.subscribe(
      (data: any) => {
        if (data !== null) {
          this.str = this.config.getHost() + 'pic/' + data.object.fileName;
          console.dir(this.str);
        }
      }
    );*/
  }

  updateArticleURL = this.config.getHost() + 'blogArticle/updateBlogArtcle';
  updateArticle(blogArticle: BlogArticle) {
    let p = {
      'id': blogArticle.id,
      'title': blogArticle.title ,
      'intro': blogArticle.intro ,
      'bolgcover': blogArticle.bolgcover,
      'typeid': blogArticle.typeid,
      'content': blogArticle.content,
      'iscomment': blogArticle.iscomment,
      'isoriginal': blogArticle.isoriginal,
      'createtime': blogArticle.createtime,
      'isuseful':  blogArticle.isuseful
    }
    return this.http.post(this.updateArticleURL, p).toPromise();
  }

  private visitsCountURL = this.config.getHost() + 'blogArticle/visitsCount';
  visitsCount(id: string) {
    return this.http.post(this.visitsCountURL, {'id': id}).toPromise();
  }

  private getBlogArticleByTepeURL = this.config.getHost() + 'blogArticle/getBlogsArticleByType';
  getBlogArticleByType(type: string) {
    return this.http.post(this.getBlogArticleByTepeURL, {'typeid': type}).toPromise();
  }
}
