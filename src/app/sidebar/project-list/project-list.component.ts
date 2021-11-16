import { Component, OnInit } from '@angular/core';
import {Project} from "../../shared/model/project.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Array<Project> = [];
  selectedProject : Project = {
    id: '',
    name: '',
    topics: [],
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.projects.push({id: 'bla', name: 'pro1', topics: [{id: '1', type: 'str1', title: 'tl1', author: 'auth1', highlightedProposal: 'hh1', activeUsers: ['ncjhsbd'], currentIteration: 'iter1', iterations: ['vfd'], creationDate: '10-01-2020'}]})
    this.projects.push({id: 'ble', name: 'pro2', topics: [{id: '2', type: 'str2', title: 'tl2', author: 'auth2', highlightedProposal: 'hh2', activeUsers: ['nbd'], currentIteration: 'iter2', iterations: ['vd'], creationDate: '10-02-2020'}]})
    //this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
    console.log(this.selectedProject);
  }

  goToDetail() {
    this.router.navigate(['project/detail', this.selectedProject.id]);
  }
}
