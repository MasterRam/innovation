import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-page-builder',
    templateUrl: './page-builder.component.html'
})

export class PageBuilderComponent implements OnInit {
    public Editor = ClassicEditor;
    constructor() { }

    ngOnInit() { }
    public onReady( editor ) {
        editor.ui.view.editable.element.parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.view.editable.element
        );
    }
}
