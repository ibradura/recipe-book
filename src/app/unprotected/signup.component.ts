import { AuthService } from './../shared/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rb-signup',
  template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignup()">
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" #email class="form-control">
                <span *ngIf="!email.pristine && email.errors != null && email.errors['noEmail']">Invalid mail address</span>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input formControlName="confirmPassword" type="password" id="confirm-password" #confirmPassword class="form-control">
                <span *ngIf="!confirmPassword.pristine && confirmPassword.errors != null && confirmPassword.errors['passwordsNotMatch']">Passwords do not match</span>
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign Up</button>
        </form>
  `,
  styles: []
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  onSignup() {
    this.authService.signupUser(this.myForm.value);
    setTimeout(() => {
      this.router.navigate(['recipes']);
    }, 800);
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, this.isEmail])],
      password: ['',Validators.required],
      confirmPassword: ['', Validators.compose([Validators.required, this.isEqualPassword.bind(this)])]
    });
  }
  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return { noEmail: true };
    }
  }
  isEqualPassword(control:FormControl): {[s: string]: boolean}{
    if(!this.myForm){
      return {passwordMatch:true};
    }
    if(control.value !== this.myForm.controls['password'].value){
      return {passwordNotMatch:true};
    }
  }
}
