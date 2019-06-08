import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageModule } from './page.module';
import { PageComponent } from './page.component';
import { PageHolderComponent } from './holder/page-holder.component';

const routes: Routes = [{
    path: '',
    component: PageHolderComponent,
    children: [
        {
            path: ':page_name/',
            component: PageComponent
        }
    ]
}];

@NgModule({
    imports: [PageModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class PageRoutingModule { }
