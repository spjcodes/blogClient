import { Component, OnInit } from '@angular/core';
import {BlogArticleTypes} from '../../model/BlogArticleTypes';
import {ArticletypeService} from '../../service/articletype.service';
import {ResponseBody} from '../../model/responseBody';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  typeList: Array<BlogArticleTypes>;

  constructor(private typerSer: ArticletypeService) { }

  ngOnInit() {
    this.initTypeList();
    console.dir(this.typeList);
  }

  private initTypeList() {
    this.typerSer.getTypes().then((data: ResponseBody) => {
      if (data.status === 'successful') {
        this.typeList = new Array<BlogArticleTypes>();
        this.typeList = data.object;
      } else {
        alert('erro:' + data.object);
      }
    });
  }
}
