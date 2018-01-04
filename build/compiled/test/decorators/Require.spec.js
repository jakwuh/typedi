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
require("reflect-metadata");
var Container_1 = require("../../src/Container");
var Service_1 = require("../../src/decorators/Service");
var Require_1 = require("../../src/decorators/Require");
describe("Require Decorator", function () {
    beforeEach(function () { return Container_1.Container.reset(); });
    it("should require package into class property", function () {
        var TestService = /** @class */ (function () {
            function TestService() {
            }
            __decorate([
                Require_1.Require("path"),
                __metadata("design:type", Object)
            ], TestService.prototype, "path", void 0);
            __decorate([
                Require_1.Require("fs"),
                __metadata("design:type", Object)
            ], TestService.prototype, "fs", void 0);
            TestService = __decorate([
                Service_1.Service()
            ], TestService);
            return TestService;
        }());
        Container_1.Container.get(TestService).path.should.be.equal(require("path"));
        Container_1.Container.get(TestService).fs.should.be.equal(require("fs"));
    });
    it("should require package to constructor parameter", function () {
        var SecondTestService = /** @class */ (function () {
            function SecondTestService(path, fs) {
                this.path = path;
                this.fs = fs;
            }
            SecondTestService = __decorate([
                Service_1.Service(),
                __param(0, Require_1.Require("path")),
                __param(1, Require_1.Require("fs")),
                __metadata("design:paramtypes", [Object, Object])
            ], SecondTestService);
            return SecondTestService;
        }());
        Container_1.Container.get(SecondTestService).path.should.be.equal(require("path"));
        Container_1.Container.get(SecondTestService).fs.should.be.equal(require("fs"));
    });
});
//# sourceMappingURL=Require.spec.js.map