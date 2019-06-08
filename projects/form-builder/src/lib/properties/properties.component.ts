import { Component, Input, OnInit } from '@angular/core';
import { FormInputCollection } from 'form-builder/models/form-input';

@Component({
    selector: 'ngl-form-properties',
    templateUrl: 'properties.component.html'
})

export class FormPropertiesComponent implements OnInit {
    @Input()
    model: FormInputCollection = {
        layout: 'one',
        properties: []
    } as FormInputCollection;
    @Input()
    index = -1;
    constructor() { }

    ngOnInit() { }
}
