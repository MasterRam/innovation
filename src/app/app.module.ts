import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OAuthModule } from "angular-oauth2-oidc";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./identity/token-interceptor";
import { AuthGuard } from "./identity/auth-guard";
import { UnAuthGuard } from "./identity/un-auth-guard";
import { ButtonsModule } from "ngx-bootstrap";
import { OAuthRefreshService } from "./identity/auth-refresh";
import { ApiService } from "./api.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BreadCrumbsModule } from "projects/bread-crumbs/src/lib/bread-crumbs.module";
import { DashboardBreadCrumbs } from "./consts/bread-crumb.const";
import { BreadCrumbsService } from "projects/bread-crumbs/src/lib/bread-crumbs.service";

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
export class AppModule {}
