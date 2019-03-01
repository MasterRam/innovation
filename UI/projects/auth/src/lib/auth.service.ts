import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth0UserProfile, WebAuth } from 'auth0-js';
import { AuthConfigService, IAuthOptions } from './auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;
  public userInfo: Auth0UserProfile;
  private _auth0: WebAuth;

  constructor(@Inject(AuthConfigService) private config: IAuthOptions, public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
    this._auth0 = new WebAuth(config);
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }
  public signup(): void {}
  public login(): void {
    this._auth0.authorize();
  }

  // ...
  public handleAuthentication(callback: () => void): void {
    this._auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult, callback);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private localLogin(authResult, callback: () => void): void {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Set the time that the access token will expire at
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
    this._auth0.client.userInfo(this._accessToken, (error, response) => {
      this.userInfo = response;
      if (callback) {
        callback();
      }
    });
  }

  public renewTokens(callback: () => void): void {
    this._auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult, callback);
        if (callback instanceof Function) {
          callback();
        }
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err['error_description']}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this._expiresAt;
  }
}
