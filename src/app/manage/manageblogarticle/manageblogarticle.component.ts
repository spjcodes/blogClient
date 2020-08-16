import { Component, OnInit } from '@angular/core';
import {BlogarticleserService} from '../../service/blogarticleser.service';
import {BlogArticle} from '../../model/blogarticle';
import {ActivatedRoute, Router} from '@angular/router';
import {ResponseBody} from '../../model/responseBody';

@Component({
  selector: 'app-manageblogarticle',
  templateUrl: './manageblogarticle.component.html',
  styleUrls: ['./manageblogarticle.component.css']
})
export class ManageblogarticleComponent implements OnInit {

  artls: Array<BlogArticle>;
  patament: string;

  private blogArticle: BlogArticle;
  constructor(private bloArtSer: BlogarticleserService, private router: Router, ) { }

  ngOnInit() {
    this.artls = new Array<BlogArticle>();
    this.getArtList();
  }


  createArticle() {
      this.router.navigate(['./manageIndex/editArticle', 'add']);
  }

  private getArtList() {
    this.bloArtSer.getBlogArticleList().then((data: any) => {
      if (data.status === 'successful') {
        this.artls = data.object;
      }
    });
  }

  updateArticle(id: string) {
    this.router.navigate(['./manageIndex/editArticle', id]);
  }

  deleteById(id: string) {
    this.bloArtSer.deleteArtById(id).then((data: ResponseBody) => {
      if (data.status !== 'successful') {
        alert('删除失败' + data.object.toString());
      } else {
        this.getArtList();
      }
    });
  }
}
