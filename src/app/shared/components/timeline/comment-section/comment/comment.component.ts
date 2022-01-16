import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/user.model";
import {Rating} from "../../../../models/rating.model";
import {getTimeDifferenceAsString} from "../../../../utils/time";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit {


  @Input()
  public id!: string;

  @Input()
  public author!: User;

  @Input()
  public content!: string;

  @Input()
  public creationDate!: Date;

  @Input()
  public rating!: Rating;

  @Input()
  public replyTo?: string;

  @Input()
  public proposal?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  getPostTime() {
    return getTimeDifferenceAsString(this.creationDate);
  }

}
