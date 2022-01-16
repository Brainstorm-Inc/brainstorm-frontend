import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {Rating} from "../../../models/rating.model";

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html'
})
export class CommentSectionComponent implements OnInit {

  @Input()
  public sectionId!: string;

  public anton: User = {
    firstName: 'Anton',
    lastName: 'Om',
    email: 'ileana.popa@gmail.com',
    profilePic: 'https://i.pravatar.cc/150?u=AntonOm'
  }

  public andreea: User = {
    firstName: 'Andreea',
    lastName: 'Om',
    email: 'ileana.popa@gmail.com',
    profilePic: 'https://i.pravatar.cc/150?u=andreea'
  }

  public gigel: User = {
    firstName: 'Gigel',
    lastName: 'Om',
    email: 'ileana.popa@gmail.com',
    profilePic: 'https://i.pravatar.cc/150?u=gigelan'
  }

  public ileana: User = {
    firstName: 'Ileana',
    lastName: 'Popa',
    email: 'ileana.popa@gmail.com',
    profilePic: 'https://i.pravatar.cc/150?u=gigel'
  }

  public rating: Rating = {
    "1": 1,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    average: 0,
    yourVote: []
  }

  public rating2: Rating = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 2,
    "5": 3,
    average: 0,
    yourVote: []
  }

  public rating3: Rating = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    average: 0,
    yourVote: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  getCreationDate(): Date {
    return new Date("2022-01-16T21:02:58.296Z");
  }

}
