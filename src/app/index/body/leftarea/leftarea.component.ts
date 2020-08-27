import { Component, OnInit } from '@angular/core';
import {BlogArticleTypes} from '../../../model/BlogArticleTypes';
import {ArticletypeService} from '../../../service/articletype.service';
import {Route} from '@angular/router';
import {ResponseBody} from '../../../model/responseBody';

@Component({
  selector: 'app-leftarea',
  templateUrl: './leftarea.component.html',
  styleUrls: ['./leftarea.component.css']
})
export class LeftareaComponent implements OnInit {

  typesList: Array<BlogArticleTypes>;

  constructor(private typesSer: ArticletypeService) { }

  ngOnInit() {
    this.initTypeList();
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

}
