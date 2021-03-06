import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './index/head/head.component';
import { BodyComponent } from './index/body/body.component';
import { FootelComponent } from './index/footel/footel.component';
import { ServiceareaComponent } from './index/body/servicearea/servicearea.component';
import { LeftareaComponent } from './index/body/leftarea/leftarea.component';
import { RightareaComponent } from './index/body/rightarea/rightarea.component';
import { ManageindexComponent } from './manage/manageindex/manageindex.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PageoneComponent } from './index/pageone/pageone.component';
import { NavbarComponent } from './manage/navbar/navbar.component';
import { ManagebodyComponent } from './manage/managebody/managebody.component';
import { ManageblogarticleComponent } from './manage/manageblogarticle/manageblogarticle.component';
import {BlogarticleserService} from './service/blogarticleser.service';
import {ConfigService} from './service/config.service';
import { EditblogarticleComponent} from './manage/manageblogarticle/editblogarticle/editblogarticle.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {MakeDownEditorDirective} from './mdeditor/MakeDownEditor.directive';
import {ArticletypeService} from './service/articletype.service';
import { ManagetypesComponent } from './manage/managetypes/managetypes.component';
import { EdittypeComponent } from './manage/managetypes/edittype/edittype.component';
import { ManageresumerComponent } from './manage/manageresumer/manageresumer.component';
import {ResumerService} from './service/resumer.service';
import { EditresumerComponent } from './manage/manageresumer/editresumer/editresumer.component';
import {SystemmanageService} from './service/systemmanage.service';
import { ManageauthorsystemComponent } from './manage/manageauthorsystem/manageauthorsystem.component';
import { EditselfintroComponent } from './manage/manageauthorsystem/editselfintro/editselfintro.component';
import { ShowcontentComponent } from './index/body/rightarea/showcontent/showcontent.component';
import { TohtmlPipe } from './pipe/tohtml.pipe';
import { MarkedPipe } from './pipe/marked.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent,
    FootelComponent,
    ServiceareaComponent,
    LeftareaComponent,
    RightareaComponent,
    ManageindexComponent,
    PageoneComponent,
    NavbarComponent,
    ManagebodyComponent,
    ManageblogarticleComponent,
    EditblogarticleComponent,
    MakeDownEditorDirective,
    ManagetypesComponent,
    EdittypeComponent,
    ManageresumerComponent,
    EditresumerComponent,
    ManageauthorsystemComponent,
    EditselfintroComponent,
    ShowcontentComponent,
    TohtmlPipe,
    MarkedPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,



  ],
  providers: [
    ConfigService,
    BlogarticleserService,
    ArticletypeService,
    ResumerService,
    SystemmanageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
