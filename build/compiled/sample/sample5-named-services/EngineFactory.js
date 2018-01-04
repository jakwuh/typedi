"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
var EngineFactory = /** @class */ (function () {
    function EngineFactory() {
        this.series = "0000";
    }
    EngineFactory.prototype.setSeries = function (series) {
        this.series = series;
    };
    EngineFactory.prototype.getSeries = function () {
        return this.series;
    };
    EngineFactory.prototype.create = function () {
        console.log("engine " + this.series + " is created");
    };
    EngineFactory = __decorate([
        index_1.Service("engine.factory")
    ], EngineFactory);
    return EngineFactory;
}());
exports.EngineFactory = EngineFactory;
//# sourceMappingURL=EngineFactory.js.map