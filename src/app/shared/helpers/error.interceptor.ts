import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {HotToastService} from "@ngneat/hot-toast";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toast: HotToastService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      // there are issues because sometimes the backend right now returns stupid error
      // we have placed a log out button that is always accesible
      // if (err.status === 401) {
      //   // auto logout if 401 response returned from api
      //   this.authenticationService.logout();
      //   location.reload(true);
      // }

      console.log(err);
      const error = err.error?.message || `${err.status} ${err.statusText}: ${err.url}`
      this.toast.error(error);
      return throwError(error);
    }))
  }
}
