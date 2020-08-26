import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ArticletypeService {

  constructor(private config: ConfigService, private http: HttpClient) { }

  private getTypesURL = this.config.getHost() + 'ArticleType/getTypes';
  getTypes() {
    return this.http.get(this.getTypesURL).toPromise();
  }


}
