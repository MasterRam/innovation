import { AuthService } from './auth.service';
import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  OnInit
} from '@angular/core';

@Directive({ selector: '[ngl-auth-action]' })
export class AuthActionDirective implements OnInit {
  @Input('ngl-auth-action')
  type: 'login' | 'logout' | 'signup' | 'both' = 'both';
  get nativeElement() {
    return this.element.nativeElement as HTMLElement;
  }
  constructor(private element: ElementRef, public auth: AuthService) {
    if (this.type !== 'signup') {
      auth.handleAuthentication(() => {
        if (this.auth.isAuthenticated()) {
          this.nativeElement.innerText = this.auth.userInfo.name + ' | Logout';
        } else {
          this.nativeElement.innerText = this.auth.userInfo.name + ' | Login';
        }
      });
    }
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens(undefined);
    }

    if (this.type !== 'both') {
      return;
    }
  }

  @HostListener('click', ['event'])
  onclick() {
    if (this.type === 'signup') {
      this.auth.signup();
    } else if (!this.auth.isAuthenticated()) {
      this.auth.login();
    } else {
      this.auth.logout();
    }
  }
}
