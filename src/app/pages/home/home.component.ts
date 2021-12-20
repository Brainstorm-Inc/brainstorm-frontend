import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/models/user.model";
import {AuthService} from '../../shared/services/auth.service';
import {UserService} from '../../shared/services/user.service';
import {Router} from "@angular/router";
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: '[page-home]',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  user: User | null = null;

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private toast: HotToastService) {
  }

  ngOnInit(): void {
    this.userService.getUser("01143f01-7b4a-4aad-8e87-6de87e34d9cc").subscribe(data => this.user = data);
  }
}
