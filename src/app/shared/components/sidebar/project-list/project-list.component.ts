import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Project} from "../../../models/project.model";
import {Router} from "@angular/router";
import {Topic, TopicSummary} from "../../../models/topic.model";
import {DomSanitizer} from "@angular/platform-browser";
import {ProjectService} from "../../../services/project.service";
import {Observable} from "rxjs";

@Pipe({name: "safeHtml"})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value: any): any {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
  isSelected: boolean = false;
  projects: Array<Project> = [];
  topics: Array<TopicSummary> = [];
  selectedProject: Project = {
    id: '',
    name: '',
    topics: [],
  }

  constructor(private router: Router, private projectService: ProjectService) {
  }

  ngOnInit(): void {
    let newTopic : Topic = {
      id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      type: "simple",
      title: "Simple Topic",
      author: "32ad2cdb-22a2-48aa-a42c-1c53a9afc4bd",
      highlightedProposal: "2ff3e4c8-5744-11ec-bf63-0242ac130002",
      activeUsers: [
        "01143f01-7b4a-4aad-8e87-6de87e34d9cc",
        "01143f01-7b4a-4aad-8e87-6de87e34d9cc",
        "01143f01-7b4a-4aad-8e87-6de87e34d9cc",
        "01143f01-7b4a-4aad-8e87-6de87e34d9cc"
      ],
      currentIteration: "4f740628-574b-11ec-bf63-0242ac130002",
      iterations: [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      creationDate: "2019-08-24T14:15:22Z"
    };

    this.projectService.addTopicToProject("2ef92afa-5cd6-11ec-bf63-0242ac130002", newTopic).subscribe(res => {
      console.log(res);
    });

    //console.log("check next thingy");

    this.projectService.getTopicsFromProject("2ef92afa-5cd6-11ec-bf63-0242ac130002").subscribe(res => {
      this.topics = res;
      console.log("topics from project were retrieved")
    });

    this.projectService.getTopicsFromProjectWithDetailsIncluded("2ef92afa-5cd6-11ec-bf63-0242ac130002").subscribe(res => {
      this.projects.push(res);
      console.log(this.projects);
    });


    // this.projects.push({
    //   id: 'bla',
    //   name: 'pro1',
    //   topics: [{
    //     id: '1',
    //     type: 'str1',
    //     title: 'tl1',
    //     author: 'auth1',
    //     highlightedProposal: 'hh1',
    //     activeUsers: ['ncjhsbd'],
    //     currentIteration: 'iter1',
    //     iterations: ['vfd'],
    //     creationDate: '10-01-2020'
    //   }]
    // });
    // this.projects.push({
    //   id: 'ble',
    //   name: 'pro2',
    //   topics: [{
    //     id: '2',
    //     type: 'str2',
    //     title: 'tl2',
    //     author: 'auth2',
    //     highlightedProposal: 'hh2',
    //     activeUsers: ['nbd'],
    //     currentIteration: 'iter2',
    //     iterations: ['vd'],
    //     creationDate: '10-02-2020'
    //   }]
    // });
    // this.projectService.getProjects().subscribe(projects => this.projects = projects);
    // for (let project of this.projects) {
    //   let topic = project["topics"][0];
    //   this.topics.push(topic);
    // }
  }

  onSelect(project: Project) {
    this.selectedProject = project;
    console.log(this.selectedProject.topics);
    this.isSelected = true;
    // return `<div class="dropdown-content" *ngFor="let topic of selectedProject.topics">
    //   {{topic.title}}
    // <hr>
    //   </div>`;
  }

  goToDetail() {
    this.router.navigate(['project/detail', this.selectedProject.id]);
  }

}
