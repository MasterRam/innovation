import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NglFormBuilderModule } from 'form-builder';
import { FormBuilderComponent } from './form-builder.component';

@NgModule({
  imports: [CommonModule, NglFormBuilderModule],
  exports: [FormBuilderComponent],
  declarations: [FormBuilderComponent],
  providers: []
})
export class FormBuilderModule {}
