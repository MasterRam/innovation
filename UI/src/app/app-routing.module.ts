import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './identity/auth-guard';
import { UnAuthGuard } from './identity/un-auth-guard';
import { GetStartedComponent } from './un-auth-modules/get-started/get-started.component';
import { LandingComponent } from './un-auth-modules/landing/landing.component';
import { LoginComponent } from './un-auth-modules/login/login.component';
import { RegisterComponent } from './un-auth-modules/register/register.component';
import { UnAuthModule } from './un-auth-modules/un-auth.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: './auth-modules/home/home-routing.module#HomeRoutingModule'
  },
  { path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
  {
    path: 'page',
    loadChildren: './auth-modules/page/page-routing.module#PageRoutingModule'
  },
  {
    path: 'blog',
    loadChildren: './auth-modules/blog/blog-routing.module#BlogRoutingModule'
  },
  {
    path: 'app',
    component: LandingComponent,
    children: [
      { path: '', component: GetStartedComponent },
      { path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [UnAuthGuard] }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [UnAuthModule, RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
