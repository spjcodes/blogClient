import { Component, OnInit } from '@angular/core';
import {BlogArticleTypes} from '../../../model/BlogArticleTypes';
import {ArticletypeService} from '../../../service/articletype.service';
import {Router} from '@angular/router';
import {ResponseBody} from '../../../model/responseBody';
import {SystemmanageService} from '../../../service/systemmanage.service';
import {SelfIntro} from '../../../model/SelfIntro';

@Component({
  selector: 'app-leftarea',
  templateUrl: './leftarea.component.html',
  styleUrls: ['./leftarea.component.css']
})
export class LeftareaComponent implements OnInit {

  typesList: Array<BlogArticleTypes>;
  selfIntro: SelfIntro;

  constructor(private typesSer: ArticletypeService, private systemManage: SystemmanageService,
              private router: Router) { }

  ngOnInit() {
    this.initTypeList();
    this.initSelfIntro();
  }

  private initTypeList() {
    this.typesSer.getTypeList().then((data: ResponseBody) => {
      if (data.status === 'successful') {
        this.typesList = new Array<BlogArticleTypes>();
        this.typesList = data.object;
      } else {
        alert('erro:' +  data.object);
      }
    });
  }

  private initSelfIntro() {
    this.systemManage.getSelfIntro().then((data: ResponseBody) => {

      if (data.status === 'successful') {
        this.selfIntro = new SelfIntro();
        this.selfIntro = data.object;
      } else {
        alert('erro:' + data.object);
      }
    });
  }

  goThisTypeList(type: string) {
    this.router.navigate(['index/', type]);
  }
}
