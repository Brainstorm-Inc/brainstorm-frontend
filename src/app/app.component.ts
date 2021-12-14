import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'brainstorm-frontend';

  constructor(private auth: AuthService) {
  }

  get isAuthenticated() {
    return this.auth.currentUserValue != null;
  }
}
