import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogArchiveComponent } from './archive/blog-archive.component';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';
import { BlogHolderComponent } from './holder/blog-holder.component';
import { BlogSearchComponent } from './search/blog-search.component';

@NgModule({
    imports: [RouterModule, CommonModule],
    exports: [BlogHolderComponent, BlogComponent],
    declarations: [BlogHolderComponent, BlogComponent, BlogArchiveComponent, BlogSearchComponent],
    providers: [BlogService],
})
export class BlogModule { }
