import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//bootstrap configured in systemjs.config.js, index.htm
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, NgbModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }