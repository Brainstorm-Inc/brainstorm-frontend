import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ButtonType, ColorType} from '../button/types';
import {Organization} from "../../models/organization.model";
import {OrganizationService} from "../../services/organization.service";
import {AuthenticatedUser} from "../../models/authUser.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit {

  ColorType = ColorType
  ButtonType = ButtonType

  public organization!: Organization;
  public loadedData = false;

  constructor(private auth: AuthService, private orgService: OrganizationService, private router: Router) {
  }

  ngOnInit(): void {
    this.auth.currentUser.subscribe(user => {
      if (user == null)
        return;
      this.orgService.getOrganization("fbbb7a98-5cc7-11ec-bf63-0242ac130002").subscribe(organization => {
        this.organization = organization;
        this.loadedData = true;
      })
    })
  }

  get isAuthenticated(): boolean {
    return this.auth.currentUserValue != null;
  }

  get currentUser(): AuthenticatedUser {
    return this.auth.currentUserValue!
  }

  logOut(): void {
    this.auth.logout()
    this.router.navigate(['/auth'], {queryParams: {returnUrl: this.router.url}})
  }

}
