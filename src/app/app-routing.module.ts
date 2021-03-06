import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./shared/helpers/auth.guard";

const routes: Routes = [{path: '', component: HomeComponent, canActivate: [AuthGuard]}, {
  path: 'auth',
  component: AuthComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
