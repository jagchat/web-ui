import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';

@NgModule({
    imports: [BrowserModule],
    //-declarations -> all components involved in the module
    //Note: ThirdComponent must be declared before SecondComponent,
    //      as the Second uses Third
    declarations: [AppComponent, FirstComponent, ThirdComponent, SecondComponent],
    //-bootstrap -> First component to render (within the module)
    bootstrap: [AppComponent]
})
export class AppModule { }