import { NgModule } from "@angular/core";

import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SummaryComponent } from "./summary/summary.component";
import { SearchComponent } from "./search/search.component";
import { BreadCrumbsModule } from "projects/bread-crumbs/src/lib/bread-crumbs.module";

@NgModule({
  imports: [CommonModule, RouterModule, BreadCrumbsModule],
  exports: [DashboardComponent, SummaryComponent, SearchComponent],
  declarations: [DashboardComponent, SummaryComponent, SearchComponent],
  providers: []
})
export class DashboardModule {}
