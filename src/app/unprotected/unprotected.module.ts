import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { NgModule } from '@angular/core';
@NgModule({
    declarations:[SigninComponent, SignupComponent],
    imports: [SharedModule, ReactiveFormsModule]
})
export class UnprotectedModule{}