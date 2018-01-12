import { Component, OnInit } from '@angular/core';

//Property Binding: binding DOM (object) properties of HTML element to Component
//  -   One-Way binding (from Component to View)
//  -   Changes to values in view are not reflected back to Component / Fields
//  -   Does not work with HTML element attributes which do not have corresponding DOM (object) properties
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {

    a: number = 10;
    b: number = 20;
    logoUrl: string = "https://angular.io/assets/images/logos/angular/angular.png";

    aReadonly: boolean = true;
    constructor() { }

    ngOnInit() {
    }

}