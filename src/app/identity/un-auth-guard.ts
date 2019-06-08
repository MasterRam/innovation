import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class UnAuthGuard implements CanActivate {

    constructor(private oauthService: OAuthService, private router: Router) { }

    canActivate() {
        if (!this.oauthService.hasValidAccessToken()) {
            return true;
        }
        this.router.navigate(['home']);
    }
}
