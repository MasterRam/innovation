import { Directive } from "@angular/core";


@Directive({ selector: "[ngl-auth-action]" })
export class AuthActionDirective {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (localStorage.getItem("isLoggedIn") === "true") {
      this.auth.renewTokens();
    }
  }
}
