import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DialogRef} from "@ngneat/dialog";

@Component({
  templateUrl: './create-org.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateOrgComponent implements OnInit {

  constructor(public ref: DialogRef) {}

  ngOnInit(): void {
  }

}
