import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(userId: string) {
    return this.http.get<User>(`${environment.apiUrl}/User/${userId}`);
  }

  updateUser(user: User) {
    return this.http.put<any>(`${environment.apiUrl}/User/${user.id}`, user);
  }
}
