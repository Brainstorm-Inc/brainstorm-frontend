import {CommentsSummary} from "./commentsSummary.model";
import {Rating} from "./rating.model";

export interface Proposal{
  readonly id: string;
  description: string;
  readonly author: string;
  readonly creationDate: string;
  files: Array<string>;
  readonly comments: CommentsSummary;
  readonly rating: Rating;
}
