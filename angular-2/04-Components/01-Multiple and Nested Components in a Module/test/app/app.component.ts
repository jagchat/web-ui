import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <div>
        App Component
        <first-component></first-component>
        <second-component></second-component>
        <third-component></third-component>
    </div>
    `
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}