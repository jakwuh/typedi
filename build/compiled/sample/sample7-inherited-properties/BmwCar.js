"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Wheel_1 = require("./Wheel");
var Inject_1 = require("../../src/decorators/Inject");
var Service_1 = require("../../src/decorators/Service");
var BmwCar = /** @class */ (function (_super) {
    __extends(BmwCar, _super);
    function BmwCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BmwCar.prototype.drive = function () {
        console.log(this.driver.name + " is driving bmw with " + this.engine.model + " engine with " + this.wheel.count + " wheels");
    };
    __decorate([
        Inject_1.Inject(),
        __metadata("design:type", Wheel_1.Wheel)
    ], BmwCar.prototype, "wheel", void 0);
    BmwCar = __decorate([
        Service_1.Service()
    ], BmwCar);
    return BmwCar;
}(Car_1.Car));
exports.BmwCar = BmwCar;
//# sourceMappingURL=BmwCar.js.map