import { Component, Input, OnInit } from '@angular/core';
import { FormInput, FormInputCollection } from './models/form-input';

@Component({
  selector: 'ngl-form-builder',
  templateUrl: './form-builder.component.html',
  styles: []
})
export class FormBuilderComponent implements OnInit {

  @Input()
  input: FormInputCollection = {
    elements: [] as FormInput[],
    layout: 'one'
  } as FormInputCollection;
  elementIndex = -1;
  constructor() { }

  ngOnInit() {
  }

  addElement(type: 'text' | 'number' | 'date' | 'checkbox' | 'radio' | 'password' | 'list') {
    const ele = {} as FormInput;
    ele.type = type;
    switch (type) {
      case 'text':
        break;
      case 'number':
        break;
      case 'date':
        break;
      case 'checkbox':
        break;
      case 'radio':
        break;
      case 'password':
        break;
      case 'list':
        break;
      default:
        return;
    }
    ele.label = 'Input';
    ele.placeholder = `Enter ${ele.label}`;
    this.input.elements.push(ele);
  }



  onEdit(data: { [name: string]: string | number }) {
    const elementIndex = data['index'] as number;
    if (data['action'] === 'edit') {
      if (this.input.elements.length >= elementIndex && this.input.elements[elementIndex].locked) {
        return;
      }
      this.elementIndex = elementIndex;
    } else if (data['action'] === 'lock') {
      if (elementIndex === elementIndex) {
        this.elementIndex = -1;
      }
      this.input.elements[elementIndex].locked = !this.input.elements[elementIndex].locked;
    }
  }
}
