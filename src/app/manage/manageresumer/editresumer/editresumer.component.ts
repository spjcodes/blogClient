import { Component, OnInit } from '@angular/core';
import {Resumer} from '../../../model/resumer';
import {ResumerService} from '../../../service/resumer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResponseBody} from '../../../model/responseBody';
import {Mdconfig} from '../../../mdeditor/config/mdconfig';
import {baseBuildCommandOptions} from '@angular/cli/commands/build';

@Component({
  selector: 'app-editresumer',
  templateUrl: './editresumer.component.html',
  styleUrls: ['./editresumer.component.css']
})
export class EditresumerComponent implements OnInit {

  parameter: string;
  resumer: Resumer;

  // makeDown 编辑器配置
  mdconf = new Mdconfig();
  markdown = '测试语句';


  constructor(private resumerSer: ResumerService, private router: Router, private avtiveRouter: ActivatedRoute) { }

  ngOnInit() {
    this.initResumer();
  }


  save(resumer: Resumer) {
    if (this.parameter === 'add') {
      this.resumerSer.addResumer(resumer).then((data: ResponseBody) => {
        if (data.status === 'successful') {
          this.router.navigate(['./manageIndex/resumerManage']);
        } else {
          alert('修改信息失败' + data.object);
        }
      });
    } else {
      this.resumerSer.updateResumer(resumer).then((data: ResponseBody) => {
        if (data.status === 'successful') {
          this.router.navigate(['./manageIndex/resumerManage']);
        } else {
          alert('修改信息失败' + data.object);
        }
      });
    }
  }

  reset() {
    this.resumer.contetn = '';
    this.resumer.isshow = false;
  }

  isShow(value: any) {
    
  }

  syncModel($event: string) {
    
  }

  private initResumer() {
    this.parameter = this.avtiveRouter.snapshot.params['id'];
    if (this.parameter === 'add') {
      this.resumer = new Resumer();
    } else {
      this.resumerSer.getResumerById(this.parameter).then((data: ResponseBody) => {
        if (data.status === 'successful') {
          this.resumer = data.object;
        } else {
          alert('erro:' + data.object);
        }
      });
    }
  }
}
