import {CommentsSummary} from "./commentsSummary.model";
import {Rating} from "./rating.model";

export interface Proposal{
  id: string;
  description: string;
  author: string;
  creationDate: string;
  files: Array<string>;
  comments: CommentsSummary;
  rating: Rating;
}
