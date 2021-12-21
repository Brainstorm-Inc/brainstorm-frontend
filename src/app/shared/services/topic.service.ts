import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Topic} from "../models/topic.model";
import {environment} from "../../../environments/environment";
import {Iteration} from "../models/iteration.model";
import { OmitReadonly } from 'src/utility-types';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http:HttpClient) {
  }

  getTopic(topicId: string){
    return this.http.get<Topic>(`${environment.apiUrl}/Topic/${topicId}`)
  }

  getTopicIterations(topicId: string) {
    return this.http.get<Array<Iteration>>(`${environment.apiUrl}/Topic/${topicId}/iterations`);
  }

  addTopicIteration(topicId: string, iteration: OmitReadonly<Iteration>) {
    return this.http.post(`${environment.apiUrl}/Topic/${topicId}/iterations`, {iteration});
  }
}
