"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by best on 9/9/2559.
 */
var core_1 = require("@angular/core");
var HiComponent = (function () {
    function HiComponent() {
    }
    HiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hi',
            template: "<label style=\"color: orange\">Hi</label>"
        }), 
        __metadata('design:paramtypes', [])
    ], HiComponent);
    return HiComponent;
}());
exports.HiComponent = HiComponent;
//# sourceMappingURL=hi.component.js.map