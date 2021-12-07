import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Proposal} from "../models/proposal.model";

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(private http: HttpClient) {
  }

  getProposal(proposalId: string) {
    return this.http.get<Proposal>(`${environment.apiUrl}/Proposal/${proposalId}`)
  }
}
