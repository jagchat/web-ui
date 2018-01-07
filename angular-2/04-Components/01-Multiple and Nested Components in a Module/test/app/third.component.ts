import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'third-component',
    template: `
    <div style='padding-left:25px'>
        Third Component
        <first-component></first-component>
    </div>
    `
})
export class ThirdComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}