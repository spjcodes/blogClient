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



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent,
    FootelComponent,
    ServiceareaComponent,
    LeftareaComponent,
    RightareaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
