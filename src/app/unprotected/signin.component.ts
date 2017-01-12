import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'rb-signin',
  template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignin()">
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" class="form-control">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign In</button>
        </form>
  `,
  styles: []
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['recipes']);
    }
  }
  onSignin() {
    this.authService.signinUser(this.myForm.value);
    setTimeout(() => {
      this.router.navigate(['recipes']);
    }, 800);
  }
  ngOnInit(): any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
}
