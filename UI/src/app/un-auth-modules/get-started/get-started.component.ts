import { Component, OnInit } from '@angular/core';
import { initAnimation } from 'src/app/main-script';

@Component({
    selector: 'app-get-started',
    templateUrl: './get-started.component.html'
})

export class GetStartedComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        initAnimation();
    }
}
