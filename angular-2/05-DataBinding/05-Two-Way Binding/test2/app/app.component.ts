import { Component, OnInit } from '@angular/core';

//Two-way Binding
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {

    a: string = "";
    b: string = "";
    constructor() { }

    ngOnInit() {
    }

    doSum() {
        return (+this.a + +this.b);
    }
}