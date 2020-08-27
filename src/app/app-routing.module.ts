import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageindexComponent} from './manage/manageindex/manageindex.component';
import {PageoneComponent} from './index/pageone/pageone.component';
import {ManageblogarticleComponent} from './manage/manageblogarticle/manageblogarticle.component';
import {EditblogarticleComponent} from './manage/manageblogarticle/editblogarticle/editblogarticle.component';
import {ManagetypesComponent} from './manage/managetypes/managetypes.component';
import {EdittypeComponent} from './manage/managetypes/edittype/edittype.component';
import {ManageresumerComponent} from './manage/manageresumer/manageresumer.component';
import {EditresumerComponent} from './manage/manageresumer/editresumer/editresumer.component';

const routes: Routes = [
  {path: 'index', component: PageoneComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'manageIndex', component: ManageindexComponent},
  {path: 'manageIndex', component: ManageindexComponent,
    children: [
      {path: '' , component: ManageblogarticleComponent },
      {path: 'blogArticleManage', component: ManageblogarticleComponent},
      {path: 'editArticle/:id', component: EditblogarticleComponent},
      {path: 'typesManage', component: ManagetypesComponent},
      {path: 'editType/:id', component: EdittypeComponent},
      {path: 'resumerManage', component: ManageresumerComponent},
      {path: 'editResumer/:id', component: EditresumerComponent},
    ],
  },


  {path: '**', component: PageoneComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
