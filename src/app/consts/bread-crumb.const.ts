import { BreadCrumbConfig, IOption } from 'bread-crumbs/bread-crumbs.config';

export const DashboardBreadCrumbs: BreadCrumbConfig = {
  crumbs: [
    {
      name: 'Dashboard',
      urlmatch: '/dashboard'
    } as IOption,
    {
      name: 'Form',
      urlmatch: '/form'
    } as IOption,
    {
      name: 'Gallery',
      urlmatch: '/gallery'
    } as IOption,
    {
      name: 'Blog',
      urlmatch: '/blog'
    } as IOption,
    {
      name: 'Pages',
      urlmatch: '/page'
    } as IOption
  ],
  prefix: '/',
  title: 'Dashboard'
};
