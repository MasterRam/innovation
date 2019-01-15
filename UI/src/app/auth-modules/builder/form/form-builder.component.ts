import { Component, OnInit } from '@angular/core';
import { SampleFormConst } from 'projects/ngl-form-builder/src/lib/sample/sampleForm.const';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html'
})

export class FormBuilderComponent implements OnInit {
    form = SampleFormConst;
    constructor() { }

    ngOnInit() { }
}
