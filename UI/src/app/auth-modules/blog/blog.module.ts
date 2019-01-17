import { NgModule } from '@angular/core';

import { BlogHolderComponent } from './holder/blog-holder.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { CommonModule } from '@angular/common';
import { BlogArchiveComponent } from './archive/blog-archive.component';
import { BlogService } from './blog.service';
import { BlogSearchComponent } from './search/blog-search.component';

@NgModule({
    imports: [RouterModule, CommonModule],
    exports: [BlogHolderComponent, BlogComponent],
    declarations: [BlogHolderComponent, BlogComponent, BlogArchiveComponent, BlogSearchComponent],
    providers: [BlogService],
})
export class BlogModule { }