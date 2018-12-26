import { NgModule } from '@angular/core';

import { PageBuilderComponent } from './page-builder.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
    imports: [CKEditorModule],
    exports: [PageBuilderComponent],
    declarations: [PageBuilderComponent],
    providers: [],
})
export class PageBuilderModule { }
