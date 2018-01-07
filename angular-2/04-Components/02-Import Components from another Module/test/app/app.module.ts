import { M1Module } from './m1/m1.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//AppComponent (in AppModule) uses C1Component from M1Module
@NgModule({
    //all exported components of M1Module will be
    //imported and made available to current module
    imports: [BrowserModule, M1Module],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }