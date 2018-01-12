import { Component, OnInit } from '@angular/core';

//Interpolation: JS Expression within template / html
//  -   One-Way binding (from Component to View)
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {

    //executed by JS Run-time    
    constructor() { }

    a: number = 10;
    b: number = 20;
    sum: number = 0;

    //-One of the Component Life Cycle Hooks
    //-executed by Angular Framework
    //-executed only once, once Component is instantiated (more later)
    ngOnInit() {
        this.sum = this.getSum();
    }

    getSum() {
        console.log("in getSum");
        return this.a + this.b;
    }
}