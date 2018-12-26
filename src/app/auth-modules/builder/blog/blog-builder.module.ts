import { NgModule } from '@angular/core';

import { BlogBuilderComponent } from './blog-builder.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
    imports: [CKEditorModule],
    exports: [BlogBuilderComponent],
    declarations: [BlogBuilderComponent],
    providers: [],
})
export class BlogBuilderModule { }
