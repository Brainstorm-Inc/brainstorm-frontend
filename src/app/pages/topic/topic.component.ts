import {Component, OnInit} from '@angular/core';
import {ProposalInput} from "../../shared/components/timeline/proposal/proposal.component";

@Component({
  selector: '[page-topic]',
  templateUrl: './topic.component.html',
})
export class TopicComponent implements OnInit {

  public openedComments: string = "some-id"

  public proposal: ProposalInput = {
    id: 'some-id',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus orci, varius et mattis et, pretium at purus. Fusce dictum, erat in accumsan scelerisque, turpis nulla blandit mauris, quis gravida leo nibh a nunc. In mattis lobortis nunc vel varius. Duis ut gravida felis. Phasellus eget pellentesque justo, ac mattis ex. Vivamus sed elit non ligula congue hendrerit a ac tortor. Ut vel viverra lorem.',
    author: {
      firstName: 'Maria',
      lastName: 'Liam',
      email: 'maria.liam@gmail.com',
      profilePic: 'https://i.pravatar.cc/150?u=marios'
    },
    creationDate: '2022-01-16T12:06:51.384Z',
    files: [],
    comments: {
      lastActiveUsers: [{
        firstName: 'Anton',
        lastName: 'Om',
        email: 'ileana.popa@gmail.com',
        profilePic: 'https://i.pravatar.cc/150?u=AntonOm'
      }, {
        firstName: 'Andreea',
        lastName: 'Om',
        email: 'ileana.popa@gmail.com',
        profilePic: 'https://i.pravatar.cc/150?u=andreea'
      }, {
        firstName: 'Ileana',
        lastName: 'Popa',
        email: 'ileana.popa@gmail.com',
        profilePic: 'https://i.pravatar.cc/150?u=gigel'
      }, {
        firstName: 'Gigel',
        lastName: 'Om',
        email: 'ileana.popa@gmail.com',
        profilePic: 'https://i.pravatar.cc/150?u=gigelan'
      }],
      commentsAmount: 5,
      lastCommentDate: '2022-01-16T21:02:58.296Z',
    },
    rating: {
      1: 1, 2: 2, 3: 3, 4: 0, 5: 0, yourVote: [], average: 3.5
    }
  }
  public proposal2: ProposalInput = {
    id: 'some-id2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus orci, varius et mattis et, pretium at purus. Fusce dictum, erat in accumsan scelerisque, turpis nulla blandit mauris, quis gravida leo nibh a nunc. In mattis lobortis nunc vel varius. Duis ut gravida felis. Phasellus eget pellentesque justo, ac mattis ex. Vivamus sed elit non ligula congue hendrerit a ac tortor. Ut vel viverra lorem.',
    author: {
      firstName: 'Ileana',
      lastName: 'Popa',
      email: 'ileana.popa@gmail.com',
      profilePic: 'https://i.pravatar.cc/150?u=gigel'
    },
    creationDate: '2022-01-16T12:06:51.384Z',
    files: [],
    comments: {
      lastActiveUsers: [{
        firstName: 'Anton',
        lastName: 'Om',
        email: 'ileana.popa@gmail.com',
        profilePic: 'https://i.pravatar.cc/150?u=AntonOm'
      }, {
        firstName: 'Andreea',
        lastName: 'Om',
        email: 'ileana.popa@gmail.com',
        profilePic: 'https://i.pravatar.cc/150?u=andreea'
      }],
      commentsAmount: 2,
      lastCommentDate: '2022-01-16T12:06:51.384Z',
    },
    rating: {
      1: 1, 2: 2, 3: 3, 4: 0, 5: 0, yourVote: [], average: 2
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  getDeadline(): Date {
    return new Date(2022, 5, 23);
  }

  getCreationDate(): Date {
    return new Date(2021, 1, 6);
  }

}
