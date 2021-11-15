import { Component, OnInit } from '@angular/core';
import {Project} from "../../shared/project.model";
import {ProjectService} from "../../shared/project.service";
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
    //topics: [],
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.projects.push({id: 'bla', name: 'pro1'})
    this.projects.push({id: 'ble', name: 'pro2'})
    //this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  goToDetail() {
    this.router.navigate(['project/detail', this.selectedProject.id]);
  }
}
