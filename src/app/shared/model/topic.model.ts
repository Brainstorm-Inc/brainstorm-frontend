export interface Topic {
  id: string;
  type: string;
  title: string;
  author: string;
  highlightedProposal: string;
  activeUsers: Array<String>;
  currentIteration: string;
  iterations: Array<String>;
  creationDate: string;
}
