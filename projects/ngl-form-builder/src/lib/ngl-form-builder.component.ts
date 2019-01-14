import { Component, OnInit, Input } from '@angular/core';
import { FormInputCollection } from './models/form-input';

@Component({
  selector: 'ngl-form-builder',
  templateUrl: './ngl-form-builder.component.html',
  styles: []
})
export class NglFormBuilderComponent implements OnInit {

  @Input()
  input: FormInputCollection = new FormInputCollection();
  constructor() { }

  ngOnInit() {
  }

}
