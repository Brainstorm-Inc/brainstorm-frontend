export interface TopicSummary {
  readonly id: string;
  readonly type: string;
  title: string;
  readonly author: string;
  readonly highlightedProposal: string;
  readonly activeUsers: Array<String>;
  readonly currentIteration: string;
}

export interface Topic extends TopicSummary{
  readonly iterations?: Array<String>;
  readonly creationDate?: string;
}

export class TopicClass implements Topic{
  id: string;
  type: string;
  title: string;
  author: string;
  highlightedProposal: string;
  activeUsers: Array<String>;
  currentIteration: string;

  constructor(props: any) {
    this.id = props.id;
    this.type = props.type;
    this.title = props.title;
    this.author = props.author;
    this.highlightedProposal = props.highlightedProposal;
    this.activeUsers = props.activeUsers;
    this.currentIteration = props.currentIteration;
  }
}
