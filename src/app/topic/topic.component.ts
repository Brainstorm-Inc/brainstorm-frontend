import {Component, Input, OnInit} from '@angular/core';
import {TopicDetailsI} from "./topicDetails";

@Component({
  selector: 'topic',
  templateUrl: '/topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()
  public topicDetails!: TopicDetailsI;
  deadline: string = "";
  months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
  maxShownImgsNr = 4;

  constructor() { }

  ngOnInit(): void {
    this.deadline = this.topicDetails.deadline.getDate().toString() + " " + this.months[this.topicDetails.deadline.getMonth()]
  }

  getProfileImages(): string[]{
    if (this.topicDetails.profileImgs.length > 4){
      return this.topicDetails.profileImgs.slice(0,4)
    }
    return this.topicDetails.profileImgs
  }

  getUnseenProfileNbr(): string {
    if (this.topicDetails.profileImgs.length - this.maxShownImgsNr > 0){
      return String(this.topicDetails.profileImgs.length - 4);
    }
    return '0';
  }

}
