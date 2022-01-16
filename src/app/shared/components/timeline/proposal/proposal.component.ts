import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {getTimeDifferenceAsString} from "../../../utils/time";
import {Proposal} from 'src/app/shared/models/proposal.model';
import {CommentsSummary} from "../../../models/commentsSummary.model";

export type ProposalInput = Omit<Proposal, 'author' | 'comments'> & { author: User, comments: CommentsSummaryInput };
export type CommentsSummaryInput = Omit<CommentsSummary, 'lastActiveUsers'> & { lastActiveUsers: Array<User> };

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html'
})
export class ProposalComponent implements OnInit {
  @Input()
  public proposal!: ProposalInput;

  @Input()
  public openedComments!: string;


  constructor() {
  }

  ngOnInit(): void {
  }

  getSpentTime() {
    return getTimeDifferenceAsString(new Date(this.proposal.creationDate));
  }

  getCommentTime() {
    return getTimeDifferenceAsString(new Date(this.proposal.comments.lastCommentDate));
  }

  isCurrentCommentOpened() {
    return this.proposal.id === this.openedComments;
  }
}
