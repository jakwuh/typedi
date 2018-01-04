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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
var BeanFactory_1 = require("./BeanFactory");
var CoffeeMaker = /** @class */ (function () {
    function CoffeeMaker(beanFactory, gulp, typescript) {
        this.beanFactory = beanFactory;
        this.gulp = gulp;
        this.typescript = typescript;
    }
    CoffeeMaker.prototype.make = function () {
        this.beanFactory.create();
        console.log("coffee is made. here is a gulp plugin we required: ");
        console.log(this.gulp);
    };
    CoffeeMaker = __decorate([
        index_1.Service(),
        __param(1, index_1.Require("gulp")),
        __param(2, index_1.Require("typescript")),
        __metadata("design:paramtypes", [BeanFactory_1.BeanFactory, Object, Object])
    ], CoffeeMaker);
    return CoffeeMaker;
}());
exports.CoffeeMaker = CoffeeMaker;
//# sourceMappingURL=CoffeeMaker.js.map