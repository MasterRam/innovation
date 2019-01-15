import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogModule } from './blog.module';
import { BlogHolderComponent } from './holder/blog-holder.component';
import { BlogComponent } from './blog.component';

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
