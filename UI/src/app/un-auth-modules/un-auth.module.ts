import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthModule } from 'projects/auth/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
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
