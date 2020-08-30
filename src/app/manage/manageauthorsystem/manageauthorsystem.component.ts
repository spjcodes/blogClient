import { Component, OnInit } from '@angular/core';
import {SelfIntro} from '../../model/SelfIntro';
import {Router} from '@angular/router';
import {SystemmanageService} from '../../service/systemmanage.service';
import {ResponseBody} from '../../model/responseBody';

@Component({
  selector: 'app-manageauthorsystem',
  templateUrl: './manageauthorsystem.component.html',
  styleUrls: ['./manageauthorsystem.component.css']
})
export class ManageauthorsystemComponent implements OnInit {
  selfIntro: SelfIntro;

  constructor(private authorManageSer: SystemmanageService, private router: Router) { }

  ngOnInit() {
    this.authorManageSer.getSelfIntro().then((data: ResponseBody) => {
      if (data.status === 'successful') {
        this.selfIntro = new SelfIntro();
        this.selfIntro = data.object;
      } else {
        alert('erro:' + data.object);
      }
    });
  }

  updateArticle() {
    this.router.navigate(['./manageIndex/editSelfIntro']);
  }
}
