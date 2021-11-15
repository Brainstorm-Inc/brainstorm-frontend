import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "./project.model";

@Injectable()
export class ProjectService {
  private projectsUrl = 'http://localhost:5000/api/Org/1/projects';

  constructor(private httpClient: HttpClient){}

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Array<Project>>(this.projectsUrl);
  }
}
