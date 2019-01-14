import { Component, OnInit, Input } from '@angular/core';
import { style } from '@angular/animations';

@Component({
    selector: 'ngl-form-element',
    templateUrl: './form-element.component.html',
    styles: [`
    .form-element{
        position:relative;
    }
    .form-element .form-element-action
    {
        display:none;
        position: absolute;
        right: 6px;
        top: -32px;
    }
    .form-element .form-element-body{
        padding: 2px;
        border-radius: 4px;
        border: 1px solid transparent;
    }
    .form-element:hover .form-element-body{
        border: 1px solid;
    }
    .form-element:hover .form-element-action{
        display:block;
    }
    `]
})

export class FormElementComponent implements OnInit {
    @Input()
    type: 'text' | 'number' | 'date' | 'checkbox' | 'radio' | 'password' | 'list';
    @Input()
    required: boolean | false;
    @Input()
    id: string;
    @Input()
    name: string;
    @Input()
    label: string;
    @Input()
    placeholder: string;

    constructor() { }

    ngOnInit() {

    }
}
