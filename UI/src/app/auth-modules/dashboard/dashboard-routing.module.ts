import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogBuilderComponent } from '../builder/blog/blog-builder.component';
import { BlogBuilderModule } from '../builder/blog/blog-builder.module';
import { FormEditorComponent } from '../builder/form/form-editor.component';
import { FormEditorModule } from '../builder/form/form-editor.module';
import { GalleryComponent } from '../builder/gallery/gallery.component';
import { GalleryModule } from '../builder/gallery/gallery.module';
import { PageBuilderComponent } from '../builder/page/page-builder.component';
import { PageBuilderModule } from '../builder/page/page-builder.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
import { SearchComponent } from './search/search.component';
import { SummaryComponent } from './summary/summary.component';

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
        path: 'form',
        component: FormEditorComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    DashboardModule,
    BlogBuilderModule,
    PageBuilderModule,
    GalleryModule,
    FormEditorModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: []
})
export class DashboardRoutingModule {}
