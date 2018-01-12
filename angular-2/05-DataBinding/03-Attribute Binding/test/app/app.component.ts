import { Component, OnInit } from '@angular/core';

//Attribute Binding: binding HTML element attributes (not DOM object properties) to Component
//  -   One-Way binding (from Component to View)
//  -   Changes to values in view are not reflected back to Component / Fields
//  -   Only used when certain HTML element attributes do not have corresponding DOM object properties
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {

    h: number = 200;
    w: number = 400;

    constructor() { }

    ngOnInit() {
    }

}