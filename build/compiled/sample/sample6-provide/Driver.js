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
var Bus_1 = require("./Bus");
var Car_1 = require("./Car");
var Driver = /** @class */ (function () {
    function Driver(bus, car) {
        this.bus = bus;
        this.car = car;
    }
    Driver.prototype.driveBus = function () {
        this.bus.drive();
    };
    Driver.prototype.driveCar = function () {
        this.car.drive();
    };
    Driver = __decorate([
        index_1.Service(),
        __metadata("design:paramtypes", [Bus_1.Bus,
            Car_1.Car])
    ], Driver);
    return Driver;
}());
exports.Driver = Driver;
//# sourceMappingURL=Driver.js.map