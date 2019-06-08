import { InjectionToken } from '@angular/core';

export interface IOption {
  name: string;
  urlmatch: string;
  order: number | -1;
  active: boolean | false;
  // route: [];
}

export interface BreadCrumbConfig {
  title: string;
  prefix: string | '/';
  crumbs: IOption[];
}

// then define injectionToken
export const BreadCrumbConfigService = new InjectionToken<BreadCrumbConfig>(
  'BreadCrumbConfig'
);
