import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { OAuthService } from "angular-oauth2-oidc";
import { Subscriber, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {
  subcribes: Subscription[] = [];
  ngOnDestroy(): void {
    this.subcribes.forEach(t => t.unsubscribe);
    this.subcribes = [];
  }
  constructor(private router: Router, private oauthService: OAuthService) {}

  ngOnInit() {
    this.subcribes.push(
      this.router.events.subscribe(t => {
        if (t instanceof NavigationStart) {
          if (
            !this.oauthService.hasValidAccessToken() &&
            !this.oauthService.hasValidIdToken()
          ) {
            if (t.url.startsWith("/home")) {
              this.router.navigate(["/app"]);
            }
          }
        }
      })
    );
  }
  logout() {    
    this.oauthService.logOut();
    this.router.navigate(["/app"]);
  }
}
