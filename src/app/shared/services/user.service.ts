import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {environment} from "../../../environments/environment";
import {OmitReadonly} from "../../../utility-types";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(userId: string) {
    return this.http.get<User>(`${environment.apiUrl}/User/${userId}`);
  }

  updateUser(userId: string, user: OmitReadonly<User>) {
    return this.http.put<User>(`${environment.apiUrl}/User/${userId}`, user);
  }

  getOrganizations(userId: string) {
    return this.http.get<Array<string>>(`${environment.apiUrl}/User/${userId}/orgs`)
  }
}
