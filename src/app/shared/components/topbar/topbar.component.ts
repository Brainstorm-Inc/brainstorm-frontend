import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ButtonType, ColorType} from '../button/types';
import {Organization} from "../../models/organization.model";
import {OrganizationService} from "../../services/organization.service";
import {AuthenticatedUser} from "../../models/authUser.model";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import bind from "bind-decorator";
import {ActiveService} from '../../services/active.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit {

  ColorType = ColorType
  ButtonType = ButtonType

  public organization!: Organization;
  public loadedData = false;

  constructor(private auth: AuthService, private orgService: OrganizationService, private userService: UserService, private router: Router, private active: ActiveService) {
  }

  ngOnInit(): void {
    this.auth.currentUser.subscribe(() => {
      this.loadOrganization(this.active.organization)
    })
    this.active.organization$.subscribe(this.loadOrganization)
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

  @bind
  loadOrganization(orgId: string | null): void {
    if (!this.isAuthenticated || orgId == null) return;

    this.loadedData = false;
    this.orgService.getOrganization(orgId).subscribe(organization => {
      this.organization = organization;
      this.loadedData = true;
    })
  }
}
