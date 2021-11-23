import { Component, OnInit } from '@angular/core';
import {UserModel} from "../shared/models/user.model";
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  user: UserModel | null = null;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getUser("01143f01-7b4a-4aad-8e87-6de87e34d9cc").subscribe(data => this.user = data);
  }

  logOut(): void {
    this.authService.logout();
  }

}
