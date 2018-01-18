import { Component, OnInit } from '@angular/core';

//Class & Style Binding
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styles: [
        `
        .bold-text{
            font-weight: bold;
        }

        .italic-text{
            font-style: italic;
        }

        `
    ]

})
export class AppComponent implements OnInit {
    a: string = "";
    b: string = "";
    sum: number = 0;

    isBold: boolean = true;
    isItalic: boolean = true;

    stylesToApply: {};
    constructor() { }

    ngOnInit() {
        this.setStyle();
    }

    applyChanges() {
        this.sum = +this.a + +this.b;
        this.setStyle();
    }

    setStyle() {
        this.stylesToApply = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'color': (this.sum > 100) ? 'red' : 'black'
        }
    }

}