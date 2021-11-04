import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopicComponent} from "./topic/topic.component";
import {AppversionsComponent} from "./appversions/appversions.component";

const routes: Routes = [{path: 'topic', component: TopicComponent}, {path: 'version', component: AppversionsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
