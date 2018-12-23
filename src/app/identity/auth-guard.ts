import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private oauthService: OAuthService, private router: Router) { }

    canActivate() {
        return true;
        if (!environment.production) {
            return true;
        }
        if (this.oauthService.hasValidAccessToken()) {
            return true;
        } else if (window.location.href.indexOf('id_token') > 0) {
            return true;
        }
        this.router.navigate(['/app']);
    }
}
