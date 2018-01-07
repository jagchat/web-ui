import { C2Component } from './c2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1.component';

@NgModule({
    //C2 is used internally in current module
    //C2 is used in C1 (declare it first)
    declarations: [C2Component, C1Component],
    imports: [CommonModule],
    //all exported components can be imported / used by other modules
    //if not exported, the components will be private to this module
    //C1 can be used by external modules, but not C2
    exports: [C1Component],
    providers: [],
})
export class M1Module { }