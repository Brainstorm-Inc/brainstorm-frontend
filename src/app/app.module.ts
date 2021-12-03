import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopicComponent} from './topic/topic.component';
import {IterationHeadComponent} from './iteration-head/iteration-head.component';
import {DatePipe} from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import {ProjectListComponent, SafeHtmlPipe} from './sidebar/project-list/project-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ProjectComponent } from './sidebar/project-list/project/project.component';
import {AuthComponent} from './auth/auth.component';
import {ButtonComponent} from './shared/button/button.component';
import { HomeComponent } from './home/home.component';
import {JwtInterceptor} from "./shared/helpers/jwt.interceptor";
import {ErrorInterceptor} from "./shared/helpers/error.interceptor";
import {MockingInterceptor} from "./shared/helpers/mocking.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    IterationHeadComponent,
    AuthComponent,
    ButtonComponent,
    HomeComponent,
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MockingInterceptor, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
