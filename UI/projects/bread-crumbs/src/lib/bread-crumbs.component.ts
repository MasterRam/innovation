import { Component, OnInit } from '@angular/core';
import { BreadCrumbsService } from './bread-crumbs.service';

@Component({
  selector: 'ngl-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: []
})
export class BreadCrumbsComponent implements OnInit {
  constructor(public service: BreadCrumbsService) {}

  ngOnInit() {}
}
