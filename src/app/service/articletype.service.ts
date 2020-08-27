import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';
import {BlogArticleTypes} from '../model/BlogArticleTypes';

@Injectable()
export class ArticletypeService {

  constructor(private config: ConfigService, private http: HttpClient) { }

  private getTypesURL = this.config.getHost() + 'ArticleType/getTypes';
  getTypes() {
    return this.http.get(this.getTypesURL).toPromise();
  }


  private getTypeListURL = this.config.getHost() + 'ArticleType/getArticleTypeList';
  getTypeList() {
    return this.http.get(this.getTypeListURL).toPromise();
  }

  private getTypeByIdURL = this.config.getHost() + 'ArticleType/getArticleTypeById';
  getTypeById(id: string) {
    return this.http.post(this.getTypeByIdURL, {'id': id}).toPromise();
  }

  private fileUploadURL = this.config.getHost() + 'blogArticle/uploadFile';
  uploadFile(icon: string, uploadData: FormData) {
    return this.http.post(this.fileUploadURL, uploadData);
  }

  private addArticleTypeURL = this.config.getHost() + 'ArticleType/addArticleType';
  addArticleType(articleType: BlogArticleTypes) {
    let p = {
      'typename': articleType.typename,
      'icon': articleType.icon
    }
    return this.http.post(this.addArticleTypeURL, p).toPromise();
  }

  private deleteTypeByIdURL = this.config.getHost() + 'ArticleType/deleteArticleType';
  deleteTypeById(id: string) {
    return this.http.post(this.deleteTypeByIdURL, {'id': id}).toPromise();
  }

  private updateArticleTypeURL = this.config.getHost() + 'ArticleType/updateArticleType';
  updateArticleType(articleType: BlogArticleTypes) {
    let p = {
      'id': articleType.id,
      'typename': articleType.typename,
      'icon': articleType.icon
    }
    return this.http.post(this.updateArticleTypeURL, p).toPromise();
  }
}
