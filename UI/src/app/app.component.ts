import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './identity/auth-config';
import { isPlatformBrowser } from '@angular/common';
import './main-script';
import { OAuthRefreshService } from './identity/auth-refresh';
import { environment } from 'src/environments/environment';
import { BreadCrumbsService } from 'projects/bread-crumbs/src/lib/bread-crumbs.service';

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
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private oauthService: OAuthService,
    private refreshService: OAuthRefreshService,
    private crumb:BreadCrumbsService
  ) {
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
        if (
          this.oauthService.hasValidIdToken() ||
          this.oauthService.hasValidAccessToken()
        ) {
          this.refreshService.refreshToken();
        }
      });
    }
  }
}
