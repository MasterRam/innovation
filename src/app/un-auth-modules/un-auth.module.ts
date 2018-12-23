import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LandingComponent,
    GetStartedComponent
  ],
  declarations: [
    GetStartedComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LandingComponent
  ],
  providers: []
})
export class UnAuthModule {}
