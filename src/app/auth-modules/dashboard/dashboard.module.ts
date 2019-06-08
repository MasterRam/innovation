import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadCrumbsModule } from 'bread-crumbs';
import { DashboardComponent } from './dashboard.component';
import { SearchComponent } from './search/search.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [CommonModule, RouterModule, BreadCrumbsModule],
  exports: [DashboardComponent, SummaryComponent, SearchComponent],
  declarations: [DashboardComponent, SummaryComponent, SearchComponent],
  providers: []
})
export class DashboardModule {}
