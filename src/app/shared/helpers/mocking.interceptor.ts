import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

type MethodSettings = {
  [key: string]: {
    code: number,
    example?: string
  }
}

type MockSettings = {
  GET: MethodSettings,
  HEAD: MethodSettings,
  POST: MethodSettings,
  PUT: MethodSettings,
  PATCH: MethodSettings,
  DELETE: MethodSettings,
  CONNECT: MethodSettings,
  OPTIONS: MethodSettings,
  TRACE: MethodSettings,
}

@Injectable()
export class MockingInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    const isMocking = environment.mocking;
    const mockSettings: MockSettings = {
      GET: {
        "Topic/c80af5c7-eb9c-4f3e-b9d9-873d8290ffb5/iterations": {
          code: 200,
          example: "TopicIterations"
        },
        '/User/dc003e9b-c339-491f-a4b3-ed3bf44836bb/orgs': {
          code: 200,
          example: "SampleList"
        },
        '/User/c80af5c7-eb9c-4f3e-b9d9-873d8290ffb5': {
          code: 200,
          example: "User"
        },
        '/User/': {
          code: 200,
          // example: 'Maricica'
          example: "Gigel"
        },
        'Org/fbbb7a98-5cc7-11ec-bf63-0242ac130002/projects': {
          code: 200,
          example: 'OrgProjects'
        },
        '/Topic/497f6eca-6276-4993-bfeb-53cbbbba6f08/project': {
          code: 200,
          example: "ProjectParentFirstExample"
        },
        '/Topic/c80af5c7-eb9c-4f3e-b9d9-873d8290ffb5/project': {
          code: 200,
          example: "ProjectParentFirstExample"
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
        '/Iteration/': {
          code: 200,
          example: "TopicIteration"
        },
        'Project/2ef92afa-5cd6-11ec-bf63-0242ac130002/topics': {
          code: 200,
          example: "FirstGet"
        },
        'Project/497f6eca-6276-4993-bfeb-53cbbbba6f08/topics': {
          code: 200,
          example: "SecondProject"
        },
        'Project/2ef92afa-5cd6-11ec-bf63-0242ac130002/topic': {
          code: 200,
          example: "First"
        },
        'Project/2ef92afa-5cd6-11ec-bf63-0242ac130002/org': {
          code: 200,
          example: "GerParentOrg"
        },
        'Project/497f6eca-6276-4993-bfeb-53cbbbba6f08/org': {
          code: 200,
          example: "GerParentOrg"
        },
        'Project/497f6eca-6276-4993-bfeb-53cbbbba6f08': {
          code: 200,
          example: "SecondExample"
        },
        'Project/2ef92afa-5cd6-11ec-bf63-0242ac130002': {
          code: 200,
          example: "FirstGetAllInDetail"
        },
        '/Org/fbbb7476-5cc7-11ec-bf63-0242ac130002/user/': {
          code: 204,
          example: "UserInOrganization"
        },
        '/Org/fbbb7a98-5cc7-11ec-bf63-0242ac130002': {
          code: 200,
          example: "SchoolProject"
        },
        '/Org/497f6eca-6276-4993-bfeb-53cbbbba6f08': {
          code: 200,
          example: "WorkTeam"
        },
      },
      HEAD: {},
      POST: {
        "Topic/497f6eca-6276-4993-bfeb-53cbbbba6f08/iterations": {
          code: 200
        },
        '/Auth/login': {
          code: 200,
          example: "Gheo"
        },
        '/Org/fbbb76e2-5cc7-11ec-bf63-0242ac130002/user/': {
          code: 201
        },
        '/Org/fbbb7548-5cc7-11ec-bf63-0242ac130002/project': {
          code: 201
        },
        '/Org': {
          code: 200,
          example: "NewOrg"
        },
        '/Project/2ef92afa-5cd6-11ec-bf63-0242ac130002/topic': {
          code: 200,
          example: "SimpleTopicCreated"
        }
      },
      PUT: {
        '/Org/fbbb79c6-5cc7-11ec-bf63-0242ac130002': {
          code: 200,
          example: "UpdateOrgInfo"
        }
        ,
        '/Org/fbbb7476-5cc7-11ec-bf63-0242ac130002/users': {
          code: 200,
          example: "BookClub"
        },
        '/Org': {
          code: 200,
          example: "NewOrg"
        }
      },
      PATCH: {},
      DELETE: {
        '/Org/fbbb7610-5cc7-11ec-bf63-0242ac130002/user': {
          code: 202
        },
        '/Org/fbbb7548-5cc7-11ec-bf63-0242ac130002': {
          code: 202
        },
      },
      CONNECT: {},
      OPTIONS: {},
      TRACE: {},
    }
    if (isMocking && isApiUrl) {
      const newUrl = request.url.replace(environment.apiUrl, environment.mockingApiUrl);
      let method: keyof MockSettings = request.method as keyof MockSettings;
      let preferSerialized = '';
      const matching = Object.keys(mockSettings[method]).find((value) => newUrl.includes(value));
      if (matching)
        preferSerialized = Object.entries(mockSettings[method][matching]).reduce(((previousValue, currentValue) => previousValue + currentValue[0] + "=" + currentValue[1] + ", "), '')
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
