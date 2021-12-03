import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Project} from "../../shared/model/project.model";
import {Router} from "@angular/router";
import {Topic} from "../../shared/model/topic.model";
import {DomSanitizer} from "@angular/platform-browser";

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
export class ProjectListComponent implements OnInit{
  isSelected: boolean = false;
  projects: Array<Project> = [];
  topics: Array<Topic> = [];
  selectedProject : Project = {
    id: '',
    name: '',
    topics: [],
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.projects.push({id: 'bla', name: 'pro1', topics: [{id: '1', type: 'str1', title: 'tl1', author: 'auth1', highlightedProposal: 'hh1', activeUsers: ['ncjhsbd'], currentIteration: 'iter1', iterations: ['vfd'], creationDate: '10-01-2020'}]});
    this.projects.push({id: 'ble', name: 'pro2', topics: [{id: '2', type: 'str2', title: 'tl2', author: 'auth2', highlightedProposal: 'hh2', activeUsers: ['nbd'], currentIteration: 'iter2', iterations: ['vd'], creationDate: '10-02-2020'}]});
    //this.projectService.getProjects().subscribe(projects => this.projects = projects);
    for(let project of this.projects) {
      let topic = project["topics"][0];
      this.topics.push(topic);
    }
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
