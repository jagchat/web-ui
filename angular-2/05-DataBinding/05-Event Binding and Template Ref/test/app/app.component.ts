import { Component, OnInit } from '@angular/core';

//Event Binding: working with default angular events
//  -   One-Way (from View to Component)
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {

    a: number = 10;
    b: number = 20;

    s: number = 0;

    username: string = "";
    constructor() { }

    ngOnInit() {
    }

    doSum() {
        this.s = this.a + this.b;
    }

    onChangeOfA(e: any) {
        //this.a = e.target.value; //string cannot be assigned to number
        this.a = +e.target.value; //convert string to number just using '+' as prefix
    }

    onChangeOfB(v: string) {
        this.b = +v; //convert string to number just using '+' as prefix
    }

    onChangeOfUserName(e: any) {
        this.username = e.target.value.toUpperCase();
    }
}