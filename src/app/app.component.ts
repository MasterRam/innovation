import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from 'auth';
import { BreadCrumbsService } from 'bread-crumbs';
import { environment } from 'src/environments/environment';
import { authConfig } from './identity/auth-config';
import { OAuthRefreshService } from './identity/auth-refresh';
import './main-script';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'source';

  /**
   *
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private oauthService: OAuthService, private refreshService: OAuthRefreshService, private crumb: BreadCrumbsService, private auth: AuthService) {
    auth.handleAuthentication(undefined);
    if (environment.allowAnonymous) {
      return;
    }
    if (isPlatformBrowser(this.platformId)) {
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
  }

  ngOnInit() {
    this.crumb.process();
    if (environment.allowAnonymous) {
      return;
    }
    if (isPlatformBrowser(this.platformId)) {
      this.oauthService.events.subscribe(t => {
        console.log('events', t);
        if (t.type === 'token_received') {
          this.refreshService.refreshToken();
        }
      });
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
        if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
          this.refreshService.refreshToken();
        }
      });
    }
  }
}
