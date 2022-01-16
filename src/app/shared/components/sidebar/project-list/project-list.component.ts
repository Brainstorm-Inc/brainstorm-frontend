import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Project} from "../../../models/project.model";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ProjectService} from "../../../services/project.service";
import {OrganizationService} from "../../../services/organization.service";
import {ActiveService} from 'src/app/shared/services/active.service';
import bind from "bind-decorator";
import {ButtonType, ColorType} from '../../button/types';
import {DialogService} from "@ngneat/dialog";
import {CreateProjectComponent} from "../create-project/create-project.component";

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
  ColorType = ColorType
  ButtonType = ButtonType

  isSelected: boolean = false;
  projects: Array<Project> = [];
  selectedProject: Project = {
    id: '',
    name: '',
    topics: [],
  }

  constructor(private router: Router, private projectService: ProjectService, private orgService: OrganizationService, private active: ActiveService, private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.active.organization$.subscribe(this.loadProjects)
    this.loadProjects(this.active.organization);
  }

  onSelect(project: Project) {
    this.selectedProject = project;
    console.log(this.selectedProject.topics);
    this.isSelected = true;
  }

  goToDetail() {
    this.router.navigate(['project/detail', this.selectedProject.id]);
  }

  @bind
  loadProjects(orgId: string | null) {
    if (orgId == null) {
      return;
    }
    const projects: Array<Project> = [];
    this.orgService.getProjects(orgId).subscribe(listOfIds => {
      listOfIds.map((projId) => {
        this.projectService.getProjectInfo(projId).subscribe(projInfo => {
          console.log("project data retrieved");
          this.projectService.getTopics(projId).subscribe(topics => {
            console.log("topics from project were retrieved")
            let proj = {
              ...projInfo,
              topics: topics
            }
            projects.push(proj);
          })
        });
      })
    })
    this.projects = projects;
  }

  openCreateProject() {
    let dialogref = this.dialogService.open(CreateProjectComponent)
    console.log(dialogref)
  }
}
