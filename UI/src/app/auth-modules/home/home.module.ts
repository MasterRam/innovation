import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AuthModule } from 'auth';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [RouterModule, AuthModule],
  exports: [HomeComponent, ProfileComponent],
  declarations: [HomeComponent, ProfileComponent],
  providers: []
})
export class HomeModule {}
