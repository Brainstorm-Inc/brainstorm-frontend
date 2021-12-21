import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProjectSummary} from "../models/project.model";
import {environment} from "../../../environments/environment";
import {Topic, TopicSummary} from "../models/topic.model";
import { OmitReadonly } from "src/utility-types";

@Injectable({
    providedIn: 'root'
  }
)
export class ProjectService {

  constructor(private httpClient: HttpClient) {
  }

  getProjectInfo(projectId: string) {
    return this.httpClient.get<ProjectSummary>(`${environment.apiUrl}/Project/${projectId}`);
  }

  getTopics(projectId: string) {
    return this.httpClient.get<Array<TopicSummary>>(`${environment.apiUrl}/Project/${projectId}/topics`);
  }

  addTopic(projectId: string, topic: OmitReadonly<Topic>) {
    return this.httpClient.post<Topic>(`${environment.apiUrl}/Project/${projectId}/topic`, topic);
  }
}
