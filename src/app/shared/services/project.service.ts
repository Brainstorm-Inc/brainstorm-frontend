import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/project.model";
import {environment} from "../../../environments/environment";
import {Topic, TopicSummary} from "../models/topic.model";

@Injectable({
  providedIn: 'root' }
)
export class ProjectService {

  constructor(private httpClient: HttpClient) {
  }

  getTopicsFromProjectWithDetailsIncluded(projectId: string) {
    return this.httpClient.get<Project>(`${environment.apiUrl}/Project/${projectId}`);
  }

  getTopicsFromProject(projectId: string) {
    return this.httpClient.get<Array<TopicSummary>>(`${environment.apiUrl}/Project/${projectId}/topics`);
  }

  addTopicToProject(projectId: string, topic: Topic) {
    return this.httpClient.post<Topic>(`${environment.apiUrl}/Project/${projectId}/topic`, topic);
  }
}
