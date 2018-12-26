import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeModule } from './home.module';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [ {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard-routing.module#DashboardRoutingModule'
    },{
        path: 'profile',
        component: ProfileComponent
    }]
}];

@NgModule({
    imports: [HomeModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class HomeRoutingModule { }
