import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {getTimeDifferenceAsString} from "../../utils/time";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-iteration-head',
  templateUrl: './iteration-head.component.html',
  styleUrls: ['./iteration-head.component.css']
})
export class IterationHeadComponent implements OnInit {

  @Input()
  public creator!: UserModel;

  @Input()
  public headline: string;

  @Input()
  public subtext: string;

  @Input()
  public goal: string;

  @Input()
  public deadline: Date;

  @Input()
  public creationDate: Date;

  constructor(public datepipe: DatePipe) {
    this.headline = '';
    this.subtext = '';
    this.goal = '';
    this.deadline = new Date();
    this.creationDate = new Date();
  }

  ngOnInit(): void {
  }

  getSpentTime() {
    return getTimeDifferenceAsString(this.creationDate);
  }

  getDeadline() {
    return this.datepipe.transform(this.deadline, 'dd-MM-YYYY');
  }
}
