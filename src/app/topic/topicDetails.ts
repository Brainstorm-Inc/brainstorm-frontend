
export interface TopicDetailsI{
  id: string;
  title: string;
  goal: string;
  currentIteration: number;
  nbrOfIterations: number;
  deadline: Date;
  topicIdea: string;
  profileImgs: Array<string>;
}

export class TopicDetails implements TopicDetailsI{
  id: string;
  title: string;
  goal: string;
  currentIteration: number;
  nbrOfIterations: number;
  deadline: Date;
  topicIdea: string;
  profileImgs: Array<string>;

  constructor(props: any) {
    this.id = props.id;
    this.title = props.title;
    this.goal = props.goal;
    this.currentIteration = props.currentIteration;
    this.nbrOfIterations = props.nbrOfIterations;
    this.deadline = props.deadline;
    this.topicIdea = props.topicIdea;
    this.profileImgs = props.profileImgs;
  }

}
