import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogModule } from './blog.module';
import { BlogHolderComponent } from './holder/blog-holder.component';

const routes: Routes = [{
    path: '',
    component: BlogHolderComponent,
    children: [
        {
            path: ':blog_name',
            component: BlogComponent
        }
    ]
}];

@NgModule({
    imports: [BlogModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class BlogRoutingModule { }
