import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TagInputModule } from 'ngx-chips';
import { BlogBuilderComponent } from './blog-builder.component';
import { BlogBuilderService } from './blog-builder.service';

@NgModule({
    imports: [FormsModule, CommonModule, CKEditorModule, TagInputModule],
    exports: [BlogBuilderComponent],
    declarations: [BlogBuilderComponent],
    providers: [BlogBuilderService],
})
export class BlogBuilderModule { }
