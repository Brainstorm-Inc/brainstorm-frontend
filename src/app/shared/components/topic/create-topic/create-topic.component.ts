import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DialogRef} from "@ngneat/dialog";
import {ButtonType, ColorType } from 'src/app/shared/components/button/types';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../../services/project.service";
import {Topic} from "../../../models/topic.model";
import {HotToastService} from "@ngneat/hot-toast";
import {bufferCount, catchError, map, mergeMap} from "rxjs/operators";
import { Observable, of} from "rxjs";
import {ImgbbService} from "../../../services/imgbb.service";
import {ActiveService} from "../../../services/active.service";

@Component({
  templateUrl: './create-topic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTopicComponent implements OnInit {

  ButtonType = ButtonType;
  ColorType = ColorType;
  createTopicForm!: FormGroup;
  submitted = false;
  error = '';

  constructor(public ref: DialogRef,
              private projectService: ProjectService,
              private formBuilder: FormBuilder,
              private cd: ChangeDetectorRef,
              private toast: HotToastService,
              private imgbb: ImgbbService,
              private active: ActiveService) {
  }

  ngOnInit(): void {
    this.createTopicForm = this.formBuilder.group({
      title: ['', Validators.required],
      goal: ['', Validators.required],
      description: ['', Validators.required],
      files: [[]],
      deadline: ['']
    });
  }

  get f() {
    return this.createTopicForm.controls;
  }

  onSubmit() {
    if (this.createTopicForm.invalid) {
      return;
    }
    console.log(this.createTopicForm);
    const files = this.createTopicForm.controls.files.value as string[];
    console.log(files);
    of(...files).pipe(
      mergeMap((file) => this.imgbb.uploadImage(file)),
      map(res => res.data.url), bufferCount(files.length),
      mergeMap(res => this.projectService.addTopic(this.active.project!, {
        title: this.f.title.value,
        goal: this.f.goal.value,
        description: this.f.description.value,
        deadline: (new Date(this.f.deadline.value)).toISOString().toString(),
        files: res
      })), catchError((error) => of(error))).subscribe((res: Topic) => {
      this.ref.close();
      console.log("topic created with id: ", res.id)
    })
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      of(...Array.from(input.files)).pipe(mergeMap((val) =>
        new Observable<string>((obs) => {
          const reader = new FileReader();
          reader.readAsDataURL(val);
          reader.onload = () => {
            obs.next(reader.result as string)
          };
        })
      ), bufferCount(input.files.length)).subscribe(x => this.createTopicForm.patchValue({
        files: x
      }));
    }
  }
}
