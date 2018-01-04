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
require("reflect-metadata");
var Container_1 = require("../../../src/Container");
var Service_1 = require("../../../src/decorators/Service");
var Inject_1 = require("../../../src/decorators/Inject");
var chai_1 = require("chai");
describe("github issues > #42 Exception not thrown on missing binding", function () {
    beforeEach(function () { return Container_1.Container.reset(); });
    it("should work properly", function () {
        var CoffeeMaker = /** @class */ (function () {
            function CoffeeMaker() {
            }
            CoffeeMaker.prototype.make = function () {
                this.factory.create();
            };
            __decorate([
                Inject_1.Inject() // This is an incorrect usage of typedi because Factory is an interface
                ,
                __metadata("design:type", Object)
            ], CoffeeMaker.prototype, "factory", void 0);
            CoffeeMaker = __decorate([
                Service_1.Service()
            ], CoffeeMaker);
            return CoffeeMaker;
        }());
        chai_1.expect(function () {
            Container_1.Container.get(CoffeeMaker);
        }).to.throw(Error);
    });
});
//# sourceMappingURL=issue-42.spec.js.map