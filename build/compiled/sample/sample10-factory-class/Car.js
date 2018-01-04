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
var CarFactory_1 = require("./CarFactory");
var Car = /** @class */ (function () {
    function Car(name, engineName, wheelCount) {
        this.name = name;
        this.engineName = engineName;
        this.wheelCount = wheelCount;
    }
    Car = __decorate([
        Service_1.Service({ factory: [CarFactory_1.CarFactory, "create"] }),
        __metadata("design:paramtypes", [String, String, Number])
    ], Car);
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=Car.js.map