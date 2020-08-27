import { Component, OnInit } from '@angular/core';
import {Resumer} from '../../model/resumer';
import {ResumerService} from '../../service/resumer.service';
import {Router} from '@angular/router';
import {ResponseBody} from '../../model/responseBody';

@Component({
  selector: 'app-manageresumer',
  templateUrl: './manageresumer.component.html',
  styleUrls: ['./manageresumer.component.css']
})
export class ManageresumerComponent implements OnInit {

  resumerList: Array<Resumer>;

  constructor(private resumerSer: ResumerService, private router: Router) { }

  ngOnInit() {
    this.initResumerList();
  }

  createResumer() {
    this.router.navigate(['./manageIndex/editResumer', 'add']);
  }

  updateResumer(id: string) {
    this.router.navigate(['./manageIndex/editResumer', id]);
  }

  deleteResumerById(id: string) {
    this.resumerSer.delteResumerById(id).then((data: ResponseBody) => {
      if (data.status === 'successful') {
        this.initResumerList();
      } else {
        alert('erro:' + data.object);
      }
    });
  }

  private initResumerList() {
    this.resumerSer.getResumerList().then((data: ResponseBody) => {
      if (data.status === 'successful') {
        this.resumerList = new Array<Resumer>();
        this.resumerList = data.object;
      } else {
        alert('erro:' + data.object);
      }
    });
  }
}
