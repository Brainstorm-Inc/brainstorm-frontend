import {TopicSummary} from "./topic.model";

export interface ProjectSummary {
  readonly id: string;
  name: string;
}

export interface Project extends ProjectSummary {
  topics: Array<TopicSummary>;
}
