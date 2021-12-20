import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Project} from "../../../models/project.model";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ProjectService} from "../../../services/project.service";
import {OrganizationService} from "../../../services/organization.service";

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
  selectedProject: Project = {
    id: '',
    name: '',
    topics: [],
  }

  constructor(private router: Router, private projectService: ProjectService, private orgService: OrganizationService) {
  }

  ngOnInit(): void {
    // region move_to_test
    // let newTopic: Topic = {
    //   id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    //   type: "simple",
    //   title: "Simple Topic",
    //   author: "32ad2cdb-22a2-48aa-a42c-1c53a9afc4bd",
    //   highlightedProposal: "2ff3e4c8-5744-11ec-bf63-0242ac130002",
    //   activeUsers: [
    //     "01143f01-7b4a-4aad-8e87-6de87e34d9cc",
    //     "01143f01-7b4a-4aad-8e87-6de87e34d9cc",
    //     "01143f01-7b4a-4aad-8e87-6de87e34d9cc",
    //     "01143f01-7b4a-4aad-8e87-6de87e34d9cc"
    //   ],
    //   currentIteration: "4f740628-574b-11ec-bf63-0242ac130002",
    //   iterations: [
    //     "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    //   ],
    //   creationDate: "2019-08-24T14:15:22Z"
    // };
    //
    // this.projectService.addTopicToProject("2ef92afa-5cd6-11ec-bf63-0242ac130002", newTopic).subscribe(res => {
    //   console.log(res);
    // });
    // endregion move_to_test
    this.orgService.getProjects('fbbb7476-5cc7-11ec-bf63-0242ac130002').subscribe(listOfIds => {
      listOfIds.map((projId) => {
        this.projectService.getProjectInfo("2ef92afa-5cd6-11ec-bf63-0242ac130002").subscribe(projInfo => {
          console.log("project data retrieved");
          this.projectService.getTopicsFromProject("2ef92afa-5cd6-11ec-bf63-0242ac130002").subscribe(topics => {
            console.log("topics from project were retrieved")
            let proj = {
              ...projInfo,
              topics: topics
            }
            this.projects.push(proj);
          })
        });
      })
    })

    // region move_to_test_2
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
    // endregion move_to_test_2
  }

  onSelect(project: Project) {
    this.selectedProject = project;
    console.log(this.selectedProject.topics);
    this.isSelected = true;
  }

  goToDetail() {
    this.router.navigate(['project/detail', this.selectedProject.id]);
  }

}
