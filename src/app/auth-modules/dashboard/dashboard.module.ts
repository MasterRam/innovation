import { NgModule } from "@angular/core";

import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SummaryComponent } from "./summary/summary.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [DashboardComponent,SummaryComponent],
  declarations: [DashboardComponent,SummaryComponent],
  providers: []
})
export class DashboardModule {}
