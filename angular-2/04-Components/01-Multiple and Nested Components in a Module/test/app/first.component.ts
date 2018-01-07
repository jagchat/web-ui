import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'first-component',
    template: `<div style='padding-left:25px'>First Component</div>`
})
export class FirstComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}