import { Component, OnInit } from "@angular/core";
import { AuthService } from "../public_api";

@Component({
  selector: "ngl-auth",
  template: `
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
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      this.auth.renewTokens();
    }
  }
}
