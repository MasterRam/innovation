import { NgModule } from '@angular/core';

import { PageComponent } from './page.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule],
    exports: [PageComponent],
    declarations: [PageComponent],
    providers: [],
})
export class PageModule { }
