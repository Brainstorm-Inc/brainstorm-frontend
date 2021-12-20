import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {environment} from "../../../environments/environment";
import {Organization} from "../models/organization.model";
import {Project} from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  getUsers(orgId: string) {
    return this.http.get<Array<User>>(`${environment.apiUrl}/Org/${orgId}/users`);
  }

  createOrganization(org: Organization) {
    return this.http.post<Organization>(`${environment.apiUrl}/Org`, org);
  }

  getOrganization(orgId: string) {
    return this.http.get<Organization>(`${environment.apiUrl}/Org/${orgId}`);
  }

  updateOrganization(org: Organization){
    return this.http.put<Organization>(`${environment.apiUrl}/Org/${org.id}`, org);
  }

  deleteOrganization(orgId: string) {
    return this.http.delete(`${environment.apiUrl}/Org/${orgId}`);
  }

  getUser(orgId: string, userId: string) {
    return this.http.get<User>(`${environment.apiUrl}/Org/${orgId}/user/${userId}`);
  }

  addUser(orgId: string, user: User) {
    return this.http.post<any>(`${environment.apiUrl}/Org/${orgId}/user/${user.id}`, user);
  }

  removeUser(orgId: string, userId: string) {
    return this.http.delete(`${environment.apiUrl}/Org/${orgId}/user/${userId}`);
  }

  addProject(orgId: string, project: Project){
    return this.http.post(`${environment.apiUrl}/Org/${orgId}/project`, project);
  }

  getProjects(orgId: string){
    return this.http.get<Array<string>>(`${environment.apiUrl}/Org/${orgId}/projects`);
  }
}

