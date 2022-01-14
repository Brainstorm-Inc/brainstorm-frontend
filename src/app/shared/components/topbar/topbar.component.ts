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
import {DialogService} from "@ngneat/dialog";
import {CreateOrgComponent} from "./create-org/create-org.component";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit {

  ColorType = ColorType
  ButtonType = ButtonType

  public organization!: Organization;
  public organizations: Organization[] = [];
  public loadedData = false;
  public openMenu = false;

  constructor(private auth: AuthService, private orgService: OrganizationService, private userService: UserService, private router: Router, private active: ActiveService, private dialog: DialogService) {
  }

  ngOnInit(): void {
    this.auth.currentUser.subscribe(() => {
      this.loadOrganization(this.active.organization)
    })
    this.active.organization$.subscribe(this.loadOrganization)
    this.userService.getOrganizations(this.auth.currentUserValue!.id).subscribe(organizations => {
      let orgs: Organization[] = [];
      organizations.map(org => this.orgService.getOrganization(org).subscribe(organization => {
        orgs.push(organization)
      }))
      this.organizations = orgs;
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

  openCreateOrg(): void {
    let dialogRef = this.dialog.open(CreateOrgComponent)
    console.log(dialogRef)
  }

  updateOrganization(org: string) {
    return this.active.updateOrganization(org)
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
