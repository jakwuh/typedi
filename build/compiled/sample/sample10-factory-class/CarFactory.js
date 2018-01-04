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
var Service_1 = require("../../src/decorators/Service");
var Engine_1 = require("./Engine");
var Wheel_1 = require("./Wheel");
var Car_1 = require("./Car");
var CarFactory = /** @class */ (function () {
    function CarFactory(engine, wheel) {
        this.engine = engine;
        this.wheel = wheel;
    }
    CarFactory.prototype.create = function () {
        return new Car_1.Car("BMW", this.engine.model, this.wheel.count);
    };
    CarFactory = __decorate([
        Service_1.Service(),
        __metadata("design:paramtypes", [Engine_1.Engine, Wheel_1.Wheel])
    ], CarFactory);
    return CarFactory;
}());
exports.CarFactory = CarFactory;
//# sourceMappingURL=CarFactory.js.map