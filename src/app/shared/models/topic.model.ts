export interface Topic {
  id: string;
  type: string;
  title: string;
  author: string;
  highlightedProposal: string;
  activeUsers: Array<String>;
  currentIteration: string;
  iterations?: Array<String>;
  creationDate?: string;
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
