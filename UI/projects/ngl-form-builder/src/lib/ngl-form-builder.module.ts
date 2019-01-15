import { NgModule } from '@angular/core';
import { NglFormBuilderComponent } from './ngl-form-builder.component';
import { FormElementComponent } from './elements/form-element.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NglFormBuilderComponent, FormElementComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NglFormBuilderComponent]
})
export class NglFormBuilderModule { }
