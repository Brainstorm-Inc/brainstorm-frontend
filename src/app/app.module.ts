import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopicComponent} from './shared/components/topic/topic.component';
import {TopicComponent as TopicPageComponent} from './pages/topic/topic.component';
import {IterationHeadComponent} from './shared/components/iteration-head/iteration-head.component';
import {DatePipe} from "@angular/common";
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {ProjectListComponent, SafeHtmlPipe} from './shared/components/sidebar/project-list/project-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ProjectComponent } from './shared/components/sidebar/project-list/project/project.component';
import {AuthComponent} from './pages/auth/auth.component';
import {ButtonComponent} from './shared/components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import {JwtInterceptor} from "./shared/helpers/jwt.interceptor";
import {ErrorInterceptor} from "./shared/helpers/error.interceptor";
import {MockingInterceptor} from "./shared/helpers/mocking.interceptor";
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { HotToastModule } from '@ngneat/hot-toast';
import {ProjectPage} from "./pages/project/project/project-page.component";

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    TopicPageComponent,
    IterationHeadComponent,
    AuthComponent,
    ButtonComponent,
    HomeComponent,
    SidebarComponent,
    ProjectListComponent,
    SafeHtmlPipe,
    ProjectComponent,
    ProjectPage,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HotToastModule.forRoot({
      position: "bottom-center"
    })
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
