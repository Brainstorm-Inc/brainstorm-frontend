import {Component, OnInit} from '@angular/core';
import {ButtonType, ColorType} from "../../shared/components/button/types";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {first} from "rxjs/operators";

@Component({
  selector: '[page-auth]',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  ButtonType = ButtonType
  ColorType = ColorType
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  selectedType: "login" | "signup" = "login"
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  get fsignup() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }

  onSubmitSignup() {
    this.submitted = true;
    // stop here if form is invalid
    console.log("signup");
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.signup(this.fsignup.firstName.value, this.fsignup.lastName.value, this.fsignup.email.value, this.fsignup.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }

}
