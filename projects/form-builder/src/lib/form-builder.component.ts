import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormInput, FormInputCollection } from './models/form-input';


const noop = () => {
};

export const FORM_BUILDER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormBuilderComponent),
  multi: true
};


@Component({
  selector: 'ngl-form-builder',
  templateUrl: './form-builder.component.html',
  styles: [],
  providers: [FORM_BUILDER_CONTROL_VALUE_ACCESSOR]
})
export class FormBuilderComponent implements OnInit, ControlValueAccessor {

  elementIndex = -1;

  // The internal data model
  private innerValue: FormInputCollection = {
    properties: [] as FormInput[],
    layout: 'one'
  } as FormInputCollection;

  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: FormInputCollection) => void = noop;

  // get accessor
  get value(): FormInputCollection {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: FormInputCollection) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  ngOnInit() {
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  writeValue(value: FormInputCollection) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
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
    this.innerValue.properties.push(ele);
  }

  titleChange(title) {
    this.value.title = title;
  }

  onEdit(data: { [name: string]: string | number }) {
    const elementIndex = data['index'] as number;
    if (data['action'] === 'edit') {
      if (this.innerValue.properties.length >= elementIndex && this.innerValue.properties[elementIndex].locked) {
        return;
      }
      this.elementIndex = elementIndex;
    } else if (data['action'] === 'lock') {
      if (elementIndex === elementIndex) {
        this.elementIndex = -1;
      }
      this.innerValue.properties[elementIndex].locked = !this.innerValue.properties[elementIndex].locked;
    }
  }
}
