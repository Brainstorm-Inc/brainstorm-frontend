import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/project.model";
import {environment} from "../../../environments/environment";

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) {
  }

  getProjects(orgId: string): Observable<Project[]> {
    return this.httpClient.get<Array<Project>>(`${environment.apiUrl}/Org/${orgId}/projects`);
  }
}
