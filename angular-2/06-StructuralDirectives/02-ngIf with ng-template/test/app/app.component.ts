import { Component, OnInit } from '@angular/core';

//ngIf - with ng-template
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    a: string = null;
    b: string = null;
    sum: number = 0;
    constructor() { }

    ngOnInit() {
    }

    applyChanges() {
        this.sum = +this.a + +this.b;
    }

}