import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageBuilderComponent } from './page-builder.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CKEditorModule,CommonModule],
    exports: [PageBuilderComponent],
    declarations: [PageBuilderComponent],
    providers: [],
})
export class PageBuilderModule { }
