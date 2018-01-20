import { Component, OnInit } from '@angular/core';

//from docs:
//-There are two other kinds of Angular directives, described extensively elsewhere: (1) components and (2) attribute directives.
//-A component manages a region of HTML in the manner of a native HTML element. Technically it's a directive with a template.
//-An attribute directive changes the appearance or behavior of an element, component, or another directive. For example, the built-in NgStyle directive changes several element styles at the same time.
//-You can apply many attribute directives to one host element. You can only apply one structural directive to a host element.

//ngIf - Structural Directive
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