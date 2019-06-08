import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { initAnimation } from 'src/app/main-script';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})

export class LandingComponent implements OnInit {
    username = 'Hello';
    @ViewChild('userName')
    userNameTemplate: TemplateRef<any>;
    isLoggedIn = false;
    constructor(private oauthService: OAuthService, private router: Router) { }

    ngOnInit() {
        if (this.oauthService.hasValidAccessToken()) {
            this.isLoggedIn = true;
            const ss: any = this.oauthService.getIdentityClaims();
            this.username = ss.username || ss.email;
        }
        initAnimation();
    }

    login() {
        this.router.navigate(['/app/login']);
    }
}
