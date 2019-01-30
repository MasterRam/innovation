import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogBuilderComponent } from './blog-builder.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlogBuilderService } from './blog-builder.service';

@NgModule({
    imports: [FormsModule,CommonModule, CKEditorModule,TagInputModule],
    exports: [BlogBuilderComponent],
    declarations: [BlogBuilderComponent],
    providers: [BlogBuilderService],
})
export class BlogBuilderModule { }
