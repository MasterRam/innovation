import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormElementComponent } from './elements/form-element.component';
import { FormBuilderComponent } from './form-builder.component';
import { FormPropertiesComponent } from './properties/properties.component';
@NgModule({
  declarations: [FormBuilderComponent, FormElementComponent, FormPropertiesComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
