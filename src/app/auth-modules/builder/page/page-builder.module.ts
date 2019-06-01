import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PageBuilderComponent } from './page-builder.component';

@NgModule({
    imports: [CKEditorModule, CommonModule],
    exports: [PageBuilderComponent],
    declarations: [PageBuilderComponent],
    providers: [],
})
export class PageBuilderModule { }
