import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <div>
        App Component
        <c1></c1>
    </div>
    `
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}