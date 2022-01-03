import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, ActivationStart, Event as REvent, Router} from "@angular/router";
import {AuthService} from './auth.service';
import {AuthenticatedUser} from "../models/authUser.model";
import bind from "bind-decorator";
import {Observable} from "rxjs";
import {BindObservable} from "bind-observable";
import {UserService} from './user.service';
import {ProjectService} from './project.service';
import {TopicService} from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  @BindObservable()
  organization: string | null = null;
  organization$!: Observable<string | null>;
  @BindObservable()
  project: string | null = null;
  project$!: Observable<string | null>;
  @BindObservable()
  topic: string | null = null;
  topic$!: Observable<string | null>;

  constructor(private router: Router, private auth: AuthService, private userService: UserService, private projectService: ProjectService, private topicService: TopicService) {
    this.auth.currentUser.subscribe(this.loadState)
    this.router.events.subscribe(this.processRouterEvents)
    this.loadState(this.auth.currentUserValue)
    this.updateState(this.router.routerState.snapshot.root)
    this.organization$.subscribe((val) => console.log("organization: ", val))
    this.project$.subscribe((val) => console.log("project: ", val))
    this.topic$.subscribe((val) => console.log("topic: ", val))
  }

  @bind
  processRouterEvents(event: REvent) {
    if (event instanceof ActivationStart) {
      if (this.auth.currentUserValue == null) {
        return;
      }
      this.updateState(event.snapshot);
    }
  }

  @bind
  updateState(snapshot: ActivatedRouteSnapshot) {
    console.log("ActivationStart", snapshot)
    if (snapshot.url.length == 0) {
      this.topic = null;
      this.project = null;
      return;
    }
    if (snapshot.url[0].path == 'project') {
      this.topic = null;
      this.project = snapshot.url[1].path;
      const that = this;
      this.projectService.getParentOrg(that.project!).subscribe((val) => that.organization = val.parent)
    }
    if (snapshot.url[0].path == 'topic') {
      this.topic = null;
      this.topic = snapshot.url[1].path;
      const that = this;
      this.topicService.getParentProject(this.topic).subscribe((val) => {
        that.project = val.parent
        this.projectService.getParentOrg(that.project).subscribe((val) => that.organization = val.parent)
      })
    }
  }

  @bind
  loadState(user: AuthenticatedUser | null) {
    if (user == null) {
      this.organization = null;
      this.project = null;
      this.topic = null;
    } else {
      let orgs = this.userService.getOrganizations(user.id);
      let that = this;
      orgs.subscribe((val) => that.organization = val[0]);
    }
  }
}
