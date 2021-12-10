import {CommentsSummary} from "./commentsSummary.model";
import {Raiting} from "./raiting.model";

export interface Proposal{
  id: string;
  description: string;
  author: string;
  creationDate: string;
  files: Array<string>;
  comments: CommentsSummary;
  rating: Raiting;
}
