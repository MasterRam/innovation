import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule],
    exports: [HomeComponent, ProfileComponent],
    declarations: [HomeComponent, ProfileComponent],
    providers: [],
})
export class HomeModule { }
