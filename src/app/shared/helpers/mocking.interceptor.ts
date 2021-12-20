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
      '/User/c80af5c7-eb9c-4f3e-b9d9-873d8290ffb5':{
      code: 200,
        example: "User"
      },
      '/User/': {
        code: 200,
        // example: 'Maricica'
        example: "Gigel"
      },
      'Org/fbbb7476-5cc7-11ec-bf63-0242ac130002/projects': {
        code: 200,
        example: 'OrgProjects'
      },
      '/Topic/497f6eca-6276-4993-bfeb-53cbbbba6f08': {
        code: 200,
        example: "Simple"
      },
      '/Topic/c80af5c7-eb9c-4f3e-b9d9-873d8290ffb5': {
        code: 200,
        example: "Complex"
      },
      '/Topic/': {
        code: 200,
        example: "Complex"
      },
      '/Proposal/': {
        code: 200,
        //example: "ComplexTopicProposal"
        example: "SimpleTopicProposal"
      },
      '/Iteration/':{
        code: 200,
        example: "TopicIteration"
      },
      'Project/2ef92afa-5cd6-11ec-bf63-0242ac130002/topics': {
        code: 200,
        example: "FirstGet"
      },
      'Project/2ef92afa-5cd6-11ec-bf63-0242ac130002/topic':{
        code: 200,
        example: "First"
      },
      'Project/2ef92afa-5cd6-11ec-bf63-0242ac130002': {
        code: 200,
        example: "FirstGetAllInDetail"
      },
      // DELETE - delete user from Org
      '/Org/fbbb7610-5cc7-11ec-bf63-0242ac130002/user':{
        code: 202
      },
      // POST - add user to Org
      '/Org/fbbb76e2-5cc7-11ec-bf63-0242ac130002/user/' : {
        code: 201
      },
      // GET - check if user in Org
      '/Org/fbbb7476-5cc7-11ec-bf63-0242ac130002/user/' : {
        code: 204,
        example: "UserInOrganization"
      }
      ,
      '/Org/fbbb7548-5cc7-11ec-bf63-0242ac130002/project': {
        code: 201
      },
      // test DELETE
      '/Org/fbbb7548-5cc7-11ec-bf63-0242ac130002':{
        code: 202
      }
      ,
      // test GET
      '/Org/fbbb7a98-5cc7-11ec-bf63-0242ac130002' : {
        code: 200,
        example: "SchoolProject"
      },
      // test PUT
      '/Org/fbbb79c6-5cc7-11ec-bf63-0242ac130002' : {
        code: 200,
        example: "UpdateOrgInfo"
      }
      ,
      '/Org/fbbb7476-5cc7-11ec-bf63-0242ac130002/users': {
        code: 200,
        example: "BookClub"
      },
      '/Org' : {
        code: 200,
        example: "NewOrg"
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
