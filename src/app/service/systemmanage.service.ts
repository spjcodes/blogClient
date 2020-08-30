import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';
import {SelfIntro} from '../model/SelfIntro';

@Injectable()
export class SystemmanageService {

  constructor(private config: ConfigService, private http: HttpClient) { }

  private updateSelfIntroURL = this.config.getHost() + 'systemManage/systemManage/';
  updateSelfIntro(selfIntro: SelfIntro) {
    let p = {
      'id': selfIntro.id,
      'intro': selfIntro.intro,
      'icon': selfIntro.icon
    }
    return this.http.post(this.updateSelfIntroURL, p).toPromise();
  }

  // 获取selfIntro信息 由于设计只有一条， 所以使用get获取（id在后台写死）
  private getSelfIntroURL = this.config.getHost() + 'systemManage/getIntroById';
  getSelfIntro() {
    return this.http.get(this.getSelfIntroURL).toPromise();
  }
}
