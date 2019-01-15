import {
  NgModule,
  InjectionToken,
  ModuleWithProviders,
  OnInit
} from "@angular/core";
import { BreadCrumbsComponent } from "./bread-crumbs.component";
import { RouterModule, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BreadCrumbsService } from "./bread-crumbs.service";
import { BreadCrumbConfigService, BreadCrumbConfig } from "./bread-crumbs.config";



@NgModule({
  declarations: [BreadCrumbsComponent],
  imports: [RouterModule, CommonModule],
  exports: [BreadCrumbsComponent]
})
export class BreadCrumbsModule implements OnInit {
  static forRoot(config: BreadCrumbConfig): ModuleWithProviders {
    return {
      ngModule: BreadCrumbsModule,            
      providers: [       
        BreadCrumbsService, 
        {
          provide: BreadCrumbConfigService,
          useValue: config
        }
      ]
    };
  }
  /**
   *
   */
  constructor() {}

  ngOnInit() {
  }
}
