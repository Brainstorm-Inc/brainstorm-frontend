import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class MockingInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    const isMocking = environment.mocking;
    const mockSettings: { [key: string]: any } = {

      "Topic/c80af5c7-eb9c-4f3e-b9d9-873d8290ffb5/iterations": {
        code: 200,
        example: "TopicIterations"
      },
      // this is for the POST request
      "Topic/497f6eca-6276-4993-bfeb-53cbbbba6f08/iterations": {
        code: 200
      },
      '/Auth/login': {
        code: 200,
        example: "Gheo"
      },
      '/User/': {
        code: 200,
        example: 'Maricica'
        // example: "Gigel"
      },
      '/Topic/': {
        code: 200,
        example: "Complex"
        // example: "Simple"
      },
      '/Proposal/': {
        code: 200,
        //example: "ComplexTopicProposal"
        example: "SimpleTopicProposal"
      },
      '/Iteration/':{
        code: 200,
        example: "TopicIteration"
      }
    }
    if (isMocking && isApiUrl) {
      const newUrl = request.url.replace(environment.apiUrl, environment.mockingApiUrl);
      let preferSerialized = '';
      const matching = Object.keys(mockSettings).find((value) => newUrl.includes(value));
      if (matching)
        preferSerialized = Object.entries(mockSettings[matching]).reduce(((previousValue, currentValue) => previousValue + currentValue[0] + "=" + currentValue[1] + ", "), '')
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
