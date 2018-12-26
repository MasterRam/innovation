import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
import { SummaryComponent } from './summary/summary.component';
import { BlogBuilderComponent } from '../builder/blog/blog-builder.component';
import { BlogBuilderModule } from '../builder/blog/blog-builder.module';
import { PageBuilderModule } from '../builder/page/page-builder.module';
import { PageBuilderComponent } from '../builder/page/page-builder.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '/home/dashboard/summary',
        pathMatch: 'full'
      },
      {
        path: 'summary',
        component: SummaryComponent
      },
      {
        path: 'blog',
        component: BlogBuilderComponent
      },
      {
        path: 'page',
        component: PageBuilderComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    DashboardModule,
    BlogBuilderModule,
    PageBuilderModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: []
})
export class DashboardRoutingModule { }
