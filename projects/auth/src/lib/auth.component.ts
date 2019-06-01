import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'ngl-auth',
  template: `
    {{ auth.userInfo | json }}
    <button
      class="btn btn-primary btn-margin"
      *ngIf="!auth.isAuthenticated()"
      (click)="auth.login()"
    >
      Log In
    </button>

    <button
      class="btn btn-primary btn-margin"
      *ngIf="auth.isAuthenticated()"
      (click)="auth.logout()"
    >
      Log Out
    </button>
  `,
  styles: []
})
export class AuthComponent implements OnInit {
  constructor(public auth: AuthService) {
    auth.handleAuthentication(undefined);
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens(undefined);
    }
  }
}
