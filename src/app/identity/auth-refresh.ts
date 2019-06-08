import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const tokenService = {
  oauthServcie: {} as OAuthService,
  refeshtime: undefined
};



@Injectable()
export class OAuthRefreshService {
  constructor(
    private authService: OAuthService,
    private httpClient: HttpClient
  ) { }

  resetTokenRefresh() {
    clearTimeout(tokenService.refeshtime);
    tokenService.refeshtime = undefined;
    this.refreshToken();
  }
  revokeToken() { }

  private updateSession(g: any) {
    const date = new Date();
    sessionStorage.setItem('access_token', g['access_token']);
    sessionStorage.setItem('access_token_stored_at', date.getTime() + '');
    sessionStorage.setItem(
      'expires_at',
      date.getTime() + parseInt(g['expires_in'] + '', 10) * 1000 + ''
    );
    sessionStorage.setItem('refresh_token', g['refresh_token']);
    sessionStorage.setItem('id_token', g['id_token']);
  }
  refreshToken() {
    if (tokenService.refeshtime) {
      return;
    }

    const tokenExpiration = this.authService.getAccessTokenExpiration();
    let difference = 10000;
    if (tokenExpiration !== undefined) {
      if (difference <= 0) {
        difference = 0;
      }
    }

    tokenService.refeshtime = setTimeout(() => {
      // console.log(
      //   `on Refresh Init ${dateNow.toString()}`,
      //   this.authService.getAccessToken()
      // );
      const headers = new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        authorization:
          'Basic ' +
          btoa(
            `${this.authService.clientId}:${this.authService.dummyClientSecret}`
          ),
        'response-type': 'application/json'
      });

      const token = sessionStorage.getItem('refresh_token');
      if (!token) {
        // console.log(
        //   `no token available, checks after ${difference / 1000} Sec`
        // );
        this.resetTokenRefresh();
        return;
      }

      this.httpClient
        .post(
          this.authService.tokenEndpoint,
          formQueryParam({
            client_id: this.authService.clientId,
            client_secret: this.authService.dummyClientSecret,
            grant_type: 'refresh_token',
            refresh_token: sessionStorage.getItem('refresh_token'),
            scope: this.authService.scope,
            response_type: 'token'
          }),
          { headers: headers }
        )
        .toPromise()
        .then(g => {
          this.updateSession(g);
          this.resetTokenRefresh();
          // console.log(
          //   `on Refresh ${dateNow.toString()}`,
          //   this.authService.getAccessToken()
          // );
        });
    }, difference);
  }
}

const formQueryParam = (urlData: object): string => {
  const body = [];
  for (const key in urlData) {
    if (urlData.hasOwnProperty(key)) {
      if (body.length > 0) {
        body.push('&');
      }
      body.push(key + '=' + encodeURIComponent(urlData[key]));

    }
  }
  return body.join('');
};
