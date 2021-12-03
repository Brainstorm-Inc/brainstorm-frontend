import {Injectable} from '@angular/core';
import {AuthenticatedUser} from "../models/authUser.model";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<AuthenticatedUser | null>;
  public currentUser: Observable<AuthenticatedUser | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<AuthenticatedUser | null>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthenticatedUser | null {
    return this.currentUserSubject.value;
  }

  signup(firstName: string, lastName: string, email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/Auth/signup`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/Auth/login`, {email, password})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
