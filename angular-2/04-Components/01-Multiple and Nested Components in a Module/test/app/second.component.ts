import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'second-component',
    template: `
    <div style='padding-left:25px'>
        Second Component
        <third-component></third-component>
    </div>
    `
})
export class SecondComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}