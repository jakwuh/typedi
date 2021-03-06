"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Service_1 = require("../../src/decorators/Service");
var FactoryToken_1 = require("./FactoryToken");
var SugarFactory = /** @class */ (function () {
    function SugarFactory() {
    }
    SugarFactory.prototype.create = function () {
        console.log("sugar created");
    };
    SugarFactory = __decorate([
        Service_1.Service({ id: FactoryToken_1.FactoryToken, multiple: true })
    ], SugarFactory);
    return SugarFactory;
}());
exports.SugarFactory = SugarFactory;
//# sourceMappingURL=SugarFactory.js.map