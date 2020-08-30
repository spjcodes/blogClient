import { Component, OnInit } from '@angular/core';
import {SelfIntro} from '../../../model/SelfIntro';
import {SystemmanageService} from '../../../service/systemmanage.service';
import {Router} from '@angular/router';
import {ResponseBody} from '../../../model/responseBody';

@Component({
  selector: 'app-editselfintro',
  templateUrl: './editselfintro.component.html',
  styleUrls: ['./editselfintro.component.css']
})
export class EditselfintroComponent implements OnInit {
  selfIntro: SelfIntro;

  constructor(private ser: SystemmanageService, private  router: Router) { }

  ngOnInit() {
    this.initSelfIntro();
  }

  save(selfIntro: SelfIntro) {
    this.ser.updateSelfIntro(this.selfIntro).then((data: ResponseBody) => {
      if (data.object === 'successful') {
        this.router.navigate(['']);
      }
    });
  }

  reset() {
    this.selfIntro.intro = '';
    this.selfIntro.icon = null;
  }

  private initSelfIntro() {
    this.ser.getSelfIntro().then((data: ResponseBody) => {
      this.selfIntro = data.object;
    });
  }

  onFileChanged($event: Event) {

  }

  onUpload(icon: string) {

  }

  syncModel($event: string) {

  }
}
