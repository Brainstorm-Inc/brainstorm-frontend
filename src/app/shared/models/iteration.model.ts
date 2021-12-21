import {Proposal} from "./proposal.model";
import {CommentsSummary} from "./commentsSummary.model";

export interface Iteration{
  readonly id: string;
  readonly position: number;
  readonly open: boolean;
  goal: string;
  description: string;
  files: Array<string>;
  readonly comments: CommentsSummary;
  deadline: string;
  readonly timeline: Array<Proposal>;
}
