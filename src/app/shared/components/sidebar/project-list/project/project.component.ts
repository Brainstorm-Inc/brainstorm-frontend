import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../../models/project.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {

  @Input() project!: Project;
  isSelected: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  select(): void {
    this.isSelected = !this.isSelected;
  }

}
