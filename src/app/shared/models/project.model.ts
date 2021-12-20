import {TopicSummary} from "./topic.model";

export interface ProjectSummary {
  id: string;
  name: string;
}

export interface Project extends ProjectSummary {
  topics: Array<TopicSummary>;
}
