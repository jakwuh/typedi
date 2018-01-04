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
var Inject_1 = require("../../src/decorators/Inject");
var Driver_1 = require("./Driver");
var Engine_1 = require("./Engine");
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2016;
    }
    __decorate([
        Inject_1.Inject(),
        __metadata("design:type", Driver_1.Driver)
    ], Car.prototype, "driver", void 0);
    __decorate([
        Inject_1.Inject(),
        __metadata("design:type", Engine_1.Engine)
    ], Car.prototype, "engine", void 0);
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=Car.js.map