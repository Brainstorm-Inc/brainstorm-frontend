import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Iteration} from "../models/iteration.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IterationService {

  constructor(private http: HttpClient) { }

  getIteration(iterationId: string) {
    return this.http.get<Iteration>(`${environment.apiUrl}/Iteration/${iterationId}`)
  }
}
