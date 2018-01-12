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

    // //previous way
    // onChangeOfA(e: any) {
    //     //this.a = e.target.value; //string cannot be assigned to number
    //     this.a = e.target.value * 1; //convert string to number        
    // }

    // //previous way
    // onChangeOfB(e: any) {
    //     this.b = e.target.value * 1; //convert string to number
    // }


    // //ngModel takes care of extracting value from $event automatically
    // //'o' contains value and not $event as above
    // onNgChangeOfB(o: any) {

    //     this.b = o * 1; //direct value (no event)
    // }

    // //previous way
    // onChangeOfUserName(e: any) {
    //     this.username = e.target.value.toUpperCase();
    // }
}