import { Component, OnInit } from '@angular/core';
import { SampleFormConst } from 'form-builder/sample/sampleForm.const';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html'
})
export class FormBuilderComponent implements OnInit {
  form = SampleFormConst;
  constructor() {}

  ngOnInit() {}
}
