import { Component, OnInit } from '@angular/core';

//ngIf - with 'let'
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    oEmp: Emp;
    constructor() { }

    ngOnInit() {
        this.oEmp = this.getAnEmp();
    }

    getAnEmp() {
        let o: Emp = new Emp();
        o.empno = 1001;
        o.ename = "Jag";
        o.sal = 3400;
        o.deptno = 10;
        return o;
    }
}

class Emp {
    empno: number;
    ename: string;
    sal: number;
    deptno: number;
}