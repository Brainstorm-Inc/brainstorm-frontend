import {Proposal} from "./proposal.model";
import {CommentsSummary} from "./commentsSummary.model";

export interface Iteration{
  id: string;
  position: number;
  open: boolean;
  goal: string;
  description: string;
  files: Array<string>;
  comments: CommentsSummary;
  deadline: string;
  timeline: Array<Proposal>;
}
