"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var c2_component_1 = require("./c2.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var c1_component_1 = require("./c1.component");
var M1Module = /** @class */ (function () {
    function M1Module() {
    }
    M1Module = __decorate([
        core_1.NgModule({
            //C2 is used internally in current module
            //C2 is used in C1 (declare it first)
            declarations: [c2_component_1.C2Component, c1_component_1.C1Component],
            imports: [common_1.CommonModule],
            //all exported components can be imported / used by other modules
            //if not exported, the components will be private to this module
            //C1 can be used by external modules, but not C2
            exports: [c1_component_1.C1Component],
            providers: [],
        })
    ], M1Module);
    return M1Module;
}());
exports.M1Module = M1Module;
//# sourceMappingURL=m1.module.js.map