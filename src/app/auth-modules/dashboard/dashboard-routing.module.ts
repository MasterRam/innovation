import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashboardModule } from "./dashboard.module";
import { SummaryComponent } from "./summary/summary.component";
import { BlogBuilderComponent } from "../builder/blog/blog-builder.component";
import { BlogBuilderModule } from "../builder/blog/blog-builder.module";
import { PageBuilderModule } from "../builder/page/page-builder.module";
import { PageBuilderComponent } from "../builder/page/page-builder.component";
import { SearchComponent } from "./search/search.component";
import { GalleryModule } from "../builder/gallery/gallery.module";
import { GalleryComponent } from "../builder/gallery/gallery.component";
import { FormBuilderComponent } from "../builder/form/form-builder.component";
import { FormBuilderModule } from "../builder/form/form-builder.module";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "/home/dashboard/summary",
        pathMatch: "full"
      },
      {
        path: "summary",
        component: SummaryComponent
      },
      {
        path: "blog",
        component: BlogBuilderComponent
      },
      {
        path: "page",
        component: PageBuilderComponent
      },
      {
        path: "form",
        component: FormBuilderComponent
      },
      {
        path: "search",
        component: SearchComponent
      },
      {
        path: "gallery",
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
    FormBuilderModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: []
})
export class DashboardRoutingModule {}
