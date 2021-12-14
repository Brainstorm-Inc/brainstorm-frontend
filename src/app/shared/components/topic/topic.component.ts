import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../models/topic.model";
import {Iteration} from "../../models/iteration.model";
import {Proposal} from "../../models/proposal.model";
import {TopicService} from "../../services/topic.service";
import {ProposalService} from "../../services/proposal.service";
import {IterationService} from "../../services/iteration.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input()
  public topicId!: string;
  public topicDetails!: Topic;
  public iteration!: Iteration;
  public highlightedProposal!: Proposal;
  public loadedData: boolean = false;
  private activeUsersImgs: Array<string> = [];
  months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
  deadline: string = "";
  proposalImage: string = ""

  constructor(private topicService: TopicService,
              private proposalService: ProposalService,
              private iterationService: IterationService,
              private router: Router,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.topicService.getTopic(this.topicId)
      .subscribe(topic => {
        this.topicDetails = topic;

        this.proposalService.getProposal(this.topicDetails.highlightedProposal)
          .subscribe(proposal => {
            this.highlightedProposal = proposal;

            if (this.highlightedProposal.files.length > 0) {
              this.proposalImage = this.highlightedProposal.files[0];
            }

            this.iterationService.getIteration(this.topicDetails.currentIteration)
              .subscribe(iteration => {
                this.iteration = iteration;
                this.setDeadline();

                this.loadedData = true
              })

            this.loadProfileImages();
          })

      });
  }

  setDeadline() {
    let deadlineAsDate = new Date(this.iteration.deadline)
    this.deadline = deadlineAsDate.getDate() + " " + this.months[deadlineAsDate.getMonth()]
  }

  loadProfileImages() {
    let index = 0
    while (index < 4 && index < this.topicDetails.activeUsers.length) {
      this.userService.getUser(this.topicDetails.activeUsers[index].toString()).subscribe(user => {
        this.activeUsersImgs.push(user.profilePic!)
        console.log(user)
      })
      index++
    }
    console.log(this.activeUsersImgs)
  }

  // It will return the images for active users
  getProfileImages(): string[] {
    return this.activeUsersImgs;
  }
}
