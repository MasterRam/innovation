import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ButtonsModule } from 'ngx-bootstrap';
import { BreadCrumbsModule } from 'projects/bread-crumbs/src/lib/bread-crumbs.module';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardBreadCrumbs } from './consts/bread-crumb.const';
import { AuthGuard } from './identity/auth-guard';
import { OAuthRefreshService } from './identity/auth-refresh';
import { TokenInterceptor } from './identity/token-interceptor';
import { UnAuthGuard } from './identity/un-auth-guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BreadCrumbsModule.forRoot(DashboardBreadCrumbs),
    OAuthModule.forRoot(),
    ButtonsModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard,
    UnAuthGuard,
    OAuthRefreshService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
