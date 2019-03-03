import { Component, OnInit } from '@angular/core';
import { SampleFormConst } from 'form-builder/sample/sampleForm.const';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-editor.component.html'
})
export class FormEditorComponent implements OnInit {
  form = SampleFormConst;
  constructor() {}

  ngOnInit() {}
}
