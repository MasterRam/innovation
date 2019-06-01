import { CommonModule } from '@angular/common';
import {
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  OnInit
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BreadCrumbsComponent } from './bread-crumbs.component';
import { BreadCrumbConfig, BreadCrumbConfigService } from './bread-crumbs.config';
import { BreadCrumbsService } from './bread-crumbs.service';



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
  constructor() { }

  ngOnInit() {
  }
}
