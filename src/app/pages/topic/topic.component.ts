import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[page-topic]',
  templateUrl: './topic.component.html',
})
export class TopicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getDeadline(): Date {
    return new Date(2022, 5, 23);
  }

  getCreationDate(): Date {
    return new Date(2021, 1, 6);
  }

}
