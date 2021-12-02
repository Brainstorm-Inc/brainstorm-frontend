import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class MockingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    const isMocking = environment.mocking;
    const mockSettings = {
      code: 200,
      example: 'Maria'
    }
    if (isMocking && isApiUrl) {
      const newUrl = request.url.replace(environment.apiUrl, environment.mockingApiUrl);
      const preferSerialized = Object.entries(mockSettings).reduce(((previousValue, currentValue) => previousValue + currentValue[0] + "=" + currentValue[1] + ", "), '')
      request = request.clone({
        url: newUrl,
        setHeaders: {
          Prefer: preferSerialized
        }
      });
    }

    return next.handle(request);
  }
}
