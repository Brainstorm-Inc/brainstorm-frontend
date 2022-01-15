import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DialogRef} from "@ngneat/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HotToastService} from "@ngneat/hot-toast";
import {ImgbbService} from "../../../services/imgbb.service";
import {OrganizationService} from "../../../services/organization.service";
import {catchError, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {ActiveService} from "../../../services/active.service";
import {Organization} from "../../../models/organization.model";

@Component({
  templateUrl: './create-org.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateOrgComponent implements OnInit {
  createForm!: FormGroup;
  error: string | null = null;

  constructor(public ref: DialogRef, private formBuilder: FormBuilder, private cd: ChangeDetectorRef, private toast: HotToastService, private imgbb: ImgbbService, private org: OrganizationService, private active: ActiveService) {
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      logo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
    console.log(this.createForm);
    this.imgbb.uploadImage(this.createForm.controls.logo.value).pipe(mergeMap(res => this.org.createOrganization({
      name: this.createForm.value.name,
      logo: res.data.url
    }))).pipe(
      this.toast.observe(
        {
          loading: 'Creating organization...',
          success: (s) => "Organization created successfully, navigating!",
          error: (e) => 'Something did not work, reason: ' + e,
        }
      ),
      catchError((error) => of(error))
    ).subscribe((res: Organization) => {
      this.ref.close();
      this.active.updateOrganization(res.id);
    })
  }

  onFileChange(event: Event) {
    const reader = new FileReader();
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      const file = input.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        this.createForm.patchValue({
          logo: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
}
