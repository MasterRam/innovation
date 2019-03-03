import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormBuilderModule } from 'form-builder';
import { FormEditorComponent } from './form-editor.component';

@NgModule({
  imports: [CommonModule, FormBuilderModule],
  exports: [FormEditorComponent],
  declarations: [FormEditorComponent],
  providers: []
})
export class FormEditorModule {}
