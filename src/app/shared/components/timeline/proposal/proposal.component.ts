import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {getTimeDifferenceAsString} from "../../../utils/time";
import {Proposal} from 'src/app/shared/models/proposal.model';

export type ProposalInput = Omit<Proposal, 'author'> & { author: User };

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html'
})
export class ProposalComponent implements OnInit {
  @Input()
  public proposal!: ProposalInput;


  constructor() {
  }

  ngOnInit(): void {
  }

  getSpentTime() {
    return getTimeDifferenceAsString(new Date(this.proposal.creationDate));
  }
}
