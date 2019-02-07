import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from 'projects/auth/src/public_api';

@NgModule({
  imports: [RouterModule, AuthModule],
  exports: [HomeComponent, ProfileComponent],
  declarations: [HomeComponent, ProfileComponent],
  providers: []
})
export class HomeModule {}
