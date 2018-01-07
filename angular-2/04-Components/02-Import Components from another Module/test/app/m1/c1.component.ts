import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    template: `
        <div style='padding-left:25px'>
            In M1 C1
            <c2></c2>
        </div>
    `
})
export class C1Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}