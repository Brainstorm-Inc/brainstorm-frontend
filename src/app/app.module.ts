import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { IterationHeadComponent } from './iteration-head/iteration-head.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    IterationHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
