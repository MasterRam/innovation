import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageComponent } from './page.component';
import { RouterModule } from '@angular/router';
import { PageHolderComponent } from './holder/page-holder.component';

@NgModule({
    imports: [RouterModule,BrowserAnimationsModule],
    exports: [PageComponent, PageHolderComponent],
    declarations: [PageComponent, PageHolderComponent],
    providers: [],
})
export class PageModule { }
