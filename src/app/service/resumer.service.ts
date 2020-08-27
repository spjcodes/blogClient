import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';
import {Resumer} from '../model/resumer';

@Injectable()
export class ResumerService {

  constructor(private config: ConfigService, private http: HttpClient) { }

  private getResumerListURL = this.config.getHost() + 'resumer/getResumerList';
  getResumerList() {
    return this.http.get(this.getResumerListURL).toPromise();
  }

  private getResumerByidURL = this.config.getHost() + 'resumer/getResumerById';
  getResumerById(id: string) {
    return this.http.post(this.getResumerByidURL, {'id': id}).toPromise();
  }

  private addResumerURL = this.config.getHost() + 'resumer/addResumer';
  addResumer(resumer: Resumer) {
    let p = {
      'isshow': resumer.isshow,
      'contetn': resumer.contetn
    }
    return this.http.post(this.addResumerURL, p).toPromise();
  }

  private updateResumerURL = this.config.getHost() + 'resumer/updateResumer';
  updateResumer(resumer: Resumer) {
    let p = {
      'id': resumer.id,
      'isshow': resumer.isshow,
      'contetn': resumer.contetn
    }
    return this.http.post(this.updateResumerURL, p).toPromise();
  }

  private deleteResumerURL = this.config.getHost() + 'resumer/deleteResumerById';
  delteResumerById(id: string) {
    return this.http.post(this.deleteResumerURL, {'id': id}).toPromise();
  }

}
