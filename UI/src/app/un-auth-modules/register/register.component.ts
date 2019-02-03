import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { userConfig } from 'src/app/identity/user-config';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
  model: LoginModel = new LoginModel();
  formGroup: FormGroup;
  constructor(private oauthService: OAuthService, private router: Router) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl(
        { value: this.model.username },
        Validators.required
      ),
      password: new FormControl(
        { value: this.model.password },
        Validators.required
      ),
      remember: new FormControl({ value: false }, Validators.required)
    });
  }

  submit() {
    const headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      authorization: btoa(
        `${this.oauthService.clientId}:${this.oauthService.dummyClientSecret}`
      )
    });
    this.oauthService
      .fetchTokenUsingPasswordFlowAndLoadUserProfile(
        this.model.username,
        this.model.password,
        headers
      )
      .then((t: any) => {
        console.log(t);
        userConfig.username = t.username || t.email;
        userConfig.email = t.email;
        userConfig.id = t.sub;
        this.router.navigate(['/home']);
      })
      .catch(c => {
        console.log(c);
      })
      .finally(() => { });
  }
}
