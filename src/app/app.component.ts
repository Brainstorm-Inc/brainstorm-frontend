import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {ActiveService} from "./shared/services/active.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'brainstorm-frontend';

  constructor(private auth: AuthService, private active: ActiveService) {
  }

  get isAuthenticated() {
    return this.auth.currentUserValue != null;
  }
}
