import {Topic} from "./topic.model";

export interface Project {
  id: string;
  name: string;
  topics: Array<Topic>;
}
