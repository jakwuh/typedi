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
var Car_1 = require("./Car");
var Inject_1 = require("../../src/decorators/Inject");
var Service_1 = require("../../src/decorators/Service");
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Object.defineProperty(Engine.prototype, "model", {
        get: function () {
            return "[" + this.car.year + "] v6";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Inject_1.Inject(function (type) { return Car_1.Car; }),
        __metadata("design:type", Car_1.Car)
    ], Engine.prototype, "car", void 0);
    Engine = __decorate([
        Service_1.Service()
    ], Engine);
    return Engine;
}());
exports.Engine = Engine;
//# sourceMappingURL=Engine.js.map