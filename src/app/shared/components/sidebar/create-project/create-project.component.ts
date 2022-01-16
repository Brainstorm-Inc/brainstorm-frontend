import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogRef} from "@ngneat/dialog";
import {ProjectService} from "../../../services/project.service";
import {ActiveService} from "../../../services/active.service";
import {bufferCount, catchError, concatAll, map, mergeMap, take} from "rxjs/operators";
import {Observable, of, zip} from "rxjs";
import {Organization} from "../../../models/organization.model";
import {HotToastService} from "@ngneat/hot-toast";
import {ImgbbService} from "../../../services/imgbb.service";
import {OrganizationService} from "../../../services/organization.service";
import {Project} from "../../../models/project.model";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProjectComponent implements OnInit {
  createForm!: FormGroup
  error: string | null = null;

  constructor(public ref: DialogRef, private formBuilder: FormBuilder, private cd: ChangeDetectorRef, private toast: HotToastService, private imgbb: ImgbbService, private org: OrganizationService, private projectService: ProjectService, private active: ActiveService) {
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
    this.org.addProject(this.active.organization!, {name: this.createForm.value.name}).subscribe((val) => console.log(val))
  }


}
