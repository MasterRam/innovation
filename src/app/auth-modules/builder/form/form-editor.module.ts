import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilderModule } from 'form-builder';
import { FormEditorComponent } from './form-editor.component';

@NgModule({
  imports: [CommonModule, FormBuilderModule, FormsModule],
  exports: [FormEditorComponent],
  declarations: [FormEditorComponent],
  providers: []
})
export class FormEditorModule {}
