import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetPasswordFormComponent } from './forget-password/forget-password-form/forget-password-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordFormComponent } from './reset-password/reset-password-form/reset-password-form.component';
import { SigninComponent } from './signin/signin.component';
import { SigninFromComponent } from './signin/signin-from/signin-from.component';
import { SignupComponent } from './signup/signup.component';
import { SignupFromComponent } from './signup/signup-from/signup-from.component';


@NgModule({
  declarations: [
    ForgetPasswordComponent,
    ForgetPasswordFormComponent,
    ResetPasswordComponent,
    ResetPasswordFormComponent,
    SigninComponent,
    SigninFromComponent,
    SignupComponent,
    SignupFromComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
