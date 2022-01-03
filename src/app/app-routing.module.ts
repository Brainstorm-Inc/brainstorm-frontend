import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './pages/auth/auth.component';
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./shared/helpers/auth.guard";
import {TopicComponent} from "./pages/topic/topic.component";

const routes: Routes = [{
  path: '', component: HomeComponent, canActivate: [AuthGuard]
}, {
  path: 'project/:id', component: HomeComponent, canActivate: [AuthGuard]
}, {
  path: 'auth', component: AuthComponent
}, {
  path: 'topic/:id', component: TopicComponent, canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
