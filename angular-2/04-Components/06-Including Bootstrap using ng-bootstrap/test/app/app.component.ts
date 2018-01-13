import { Component, OnInit } from '@angular/core';

//All bootstrap artifacts are added in index.htm
@Component({
    selector: 'app',

    //-> inline template
    // template: `
    // <div class='container'>
    //     <div class='panel panel-primary'>
    //         <div class='panel-heading'>App Component</div>
    //         <div class='panel-body'>Some info here</div>
    //     </div>
    // </div>
    // `

    //->using templateUrl (but not relative url)
    //templateUrl: 'app/app.component.html',

    //->using templateUrl (now relative)
    moduleId: module.id,
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}