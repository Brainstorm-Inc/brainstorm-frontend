import {Component, OnInit} from '@angular/core';
import {ProjectService} from 'src/app/shared/services/project.service';
import {ActiveService} from "../../../shared/services/active.service";
import bind from "bind-decorator";

@Component({
  selector: '[page-project]',
  templateUrl: './project-page.component.html'
})
export class ProjectPage implements OnInit {

  constructor(private active: ActiveService, private projectService: ProjectService) {
  }

  topics: string[] = [];

  ngOnInit(): void {
    this.loadProject(this.active.project)
    this.active.project$.subscribe(this.loadProject)
  }

  @bind
  loadProject(projectId: string | null): void {
    if (projectId == null) {
      return
    }
    let that = this;
    this.projectService.getTopics(projectId).subscribe((val) => that.topics = val.map((topic) => topic.id))
  }

}
