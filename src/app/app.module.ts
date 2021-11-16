import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { IterationHeadComponent } from './iteration-head/iteration-head.component';
import {DatePipe} from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import {ProjectListComponent, SafeHtmlPipe} from './sidebar/project-list/project-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProjectComponent } from './sidebar/project-list/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    IterationHeadComponent,
    TopicComponent,
    SidebarComponent,
    ProjectListComponent,
    SafeHtmlPipe,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
