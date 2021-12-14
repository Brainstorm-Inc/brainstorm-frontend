import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ButtonType, ColorType } from '../button/types';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit {

  ColorType = ColorType
  ButtonType = ButtonType

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  get isAuthenticated(): boolean {
    return this.auth.currentUserValue != null;
  }

}
