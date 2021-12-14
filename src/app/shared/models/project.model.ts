import {TopicSummary} from "./topic.model";

export interface ProjectSummary {
  id: string;
  name: string;
  topics: Array<TopicSummary>;
}

export interface Project extends ProjectSummary {

}
