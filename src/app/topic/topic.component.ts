import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../shared/models/topic.model";
import {Iteration} from "../shared/models/iteration.model";
import {Proposal} from "../shared/models/proposal.model";

@Component({
  selector: 'topic',
  templateUrl: '/topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()
  public topicDetails!: Topic;
  public iteration!: Iteration;
  public highlightedProposal!: Proposal;
  months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
  deadline: string = "";
  proposalImage: string = ""

  constructor() {
  }

  ngOnInit(): void {
    this.setMockAttributes()

    this.setDeadline();
    if (this.highlightedProposal.files.length > 0){
      this.proposalImage = this.highlightedProposal.files[0];
    }

  }

  setMockAttributes(){
    this.iteration = {id:"idajjhsh", position:3, open: true, goal:"GOAL", description:"Idea description", files: [],
      deadline:"2019-08-24T14:15:22Z", timeline: [], comments:{lastActiveUsers: [], commentsAmount: 0, lastCommentDate: ""}};

    this.highlightedProposal = {id:"497f6eca-6276-4993-bfeb-53cbbbba6f08",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author:"32ad2cdb-22a2-48aa-a42c-1c53a9afc4bd",
      creationDate:"2019-08-24T14:15:22Z",
      files: ["https://source.unsplash.com/random/800x600"],
      comments:{lastActiveUsers: [], commentsAmount: 0, lastCommentDate: ""},
      rating: {}}
  }

  setDeadline(){
    let deadlineAsDate = new Date(this.iteration.deadline)
    this.deadline = deadlineAsDate.getDate() + " " + this.months[deadlineAsDate.getMonth()]
  }

  // It will bring the images for active users
  getProfileImages(): string[]{

    // MOCK IMAGES
    let imgs;
    if (this.topicDetails.activeUsers.length <= 4)
     imgs = Array(this.topicDetails.activeUsers.length).fill("https://source.unsplash.com/random/600x400");
    else
      imgs = Array(4).fill("https://source.unsplash.com/random/600x400");

    return imgs;
  }
}
