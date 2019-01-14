import { NgModule } from '@angular/core';

import { FormBuilderComponent } from './form-builder.component';
import { NglFormBuilderModule } from 'projects/ngl-form-builder/src/public_api';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, NglFormBuilderModule],
    exports: [FormBuilderComponent],
    declarations: [FormBuilderComponent],
    providers: [],
})
export class FormBuilderModule { }
