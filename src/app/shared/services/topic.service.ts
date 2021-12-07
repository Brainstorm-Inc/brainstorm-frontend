import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Topic} from "../models/topic.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http:HttpClient) {
  }

  getTopic(topicId: string){
    console.log(topicId)
    return this.http.get<Topic>(`${environment.apiUrl}/Topic/${topicId}`)
  }
}
