import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [DashboardComponent],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
 