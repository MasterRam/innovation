import { Injectable, Inject } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { Observable, of } from "rxjs";
import {
  IOption,
  BreadCrumbConfigService,
  BreadCrumbConfig
} from "./bread-crumbs.config";

@Injectable({
  providedIn: "root"
})
export class BreadCrumbsService {
  prefix: string = "/";
  crumbOptions: IOption[] = [];
  crumbs: Observable<IOption[]>;
  constructor(
    @Inject(BreadCrumbConfigService) private config: BreadCrumbConfig,
    private router: Router
  ) {
    this.crumbOptions = config.crumbs;
  }

  process() {
    this.router.events.subscribe(t => {
      if (t instanceof NavigationEnd) {
        if (!t.url.startsWith(this.prefix)) return;
        this.updateCrumbs(t.url);
      }
    });
  }

  private updateCrumbs(url: string) {
    let tempCrumbs: IOption[] = [];
    this.crumbOptions.forEach(each => {
      let index = -1;
      if ((index = url.indexOf(each.urlmatch)) > -1) {
        const target = Object.assign({}, each);
        target.order = index;
        tempCrumbs.push(target);
      }
    });
    tempCrumbs = tempCrumbs.sort(t => t.order);
    if (tempCrumbs.length > 0) tempCrumbs[tempCrumbs.length - 1].active = true;
    this.crumbs = of(tempCrumbs);
  }
}
