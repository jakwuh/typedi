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
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
var BeanFactory_1 = require("./BeanFactory");
var SugarFactory_1 = require("./SugarFactory");
var WaterFactory_1 = require("./WaterFactory");
var CoffeeMaker = /** @class */ (function () {
    function CoffeeMaker(beanFactory, sugarFactory, waterFactory) {
        this.beanFactory = beanFactory;
        this.sugarFactory = sugarFactory;
        this.waterFactory = waterFactory;
    }
    CoffeeMaker.prototype.make = function () {
        this.beanFactory.create();
        this.sugarFactory.create();
        this.waterFactory.create();
        console.log("coffee is made");
    };
    CoffeeMaker = __decorate([
        index_1.Service(),
        __metadata("design:paramtypes", [BeanFactory_1.BeanFactory, SugarFactory_1.SugarFactory, WaterFactory_1.WaterFactory])
    ], CoffeeMaker);
    return CoffeeMaker;
}());
exports.CoffeeMaker = CoffeeMaker;
//# sourceMappingURL=CoffeeMaker.js.map