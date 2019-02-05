import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthActionDirective } from './auth-action.directive';
import { AuthComponent } from './auth.component';
import { AuthConfigService } from './auth.config';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AuthComponent, AuthActionDirective],
  imports: [
    CommonModule
  ],
  exports: [AuthComponent, AuthActionDirective]
})
export class AuthModule {
  static forRoot(config): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        {
          provide: AuthConfigService,
          useValue: config
        }
      ]
    };
  }
}
