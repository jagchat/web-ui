import { FirstComponent } from './first.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, FirstComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }