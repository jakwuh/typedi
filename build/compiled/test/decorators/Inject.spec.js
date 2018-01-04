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
var Inject_1 = require("../../src/decorators/Inject");
var Token_1 = require("../../src/Token");
describe("Inject Decorator", function () {
    beforeEach(function () { return Container_1.Container.reset(); });
    it("should inject service into class property", function () {
        var TestService = /** @class */ (function () {
            function TestService() {
            }
            TestService = __decorate([
                Service_1.Service()
            ], TestService);
            return TestService;
        }());
        var SecondTestService = /** @class */ (function () {
            function SecondTestService() {
            }
            __decorate([
                Inject_1.Inject(),
                __metadata("design:type", TestService)
            ], SecondTestService.prototype, "testService", void 0);
            SecondTestService = __decorate([
                Service_1.Service()
            ], SecondTestService);
            return SecondTestService;
        }());
        Container_1.Container.get(SecondTestService).testService.should.be.instanceOf(TestService);
    });
    it("should inject token service properly", function () {
        var ServiceToken = new Token_1.Token();
        var TestService = /** @class */ (function () {
            function TestService() {
            }
            TestService = __decorate([
                Service_1.Service(ServiceToken)
            ], TestService);
            return TestService;
        }());
        var SecondTestService = /** @class */ (function () {
            function SecondTestService() {
            }
            __decorate([
                Inject_1.Inject(ServiceToken),
                __metadata("design:type", Object)
            ], SecondTestService.prototype, "testService", void 0);
            SecondTestService = __decorate([
                Service_1.Service()
            ], SecondTestService);
            return SecondTestService;
        }());
        Container_1.Container.get(SecondTestService).testService.should.be.instanceOf(TestService);
    });
    it("should inject named service into class property", function () {
        var NamedService = /** @class */ (function () {
            function NamedService() {
            }
            NamedService = __decorate([
                Service_1.Service("mega.service")
            ], NamedService);
            return NamedService;
        }());
        var SecondTestService = /** @class */ (function () {
            function SecondTestService() {
            }
            __decorate([
                Inject_1.Inject("mega.service"),
                __metadata("design:type", Object)
            ], SecondTestService.prototype, "megaService", void 0);
            SecondTestService = __decorate([
                Service_1.Service()
            ], SecondTestService);
            return SecondTestService;
        }());
        Container_1.Container.get(SecondTestService).megaService.should.be.instanceOf(NamedService);
    });
    it("should inject service via constructor", function () {
        var TestService = /** @class */ (function () {
            function TestService() {
            }
            TestService = __decorate([
                Service_1.Service()
            ], TestService);
            return TestService;
        }());
        var SecondTestService = /** @class */ (function () {
            function SecondTestService() {
            }
            SecondTestService = __decorate([
                Service_1.Service()
            ], SecondTestService);
            return SecondTestService;
        }());
        var NamedService = /** @class */ (function () {
            function NamedService() {
            }
            NamedService = __decorate([
                Service_1.Service("mega.service")
            ], NamedService);
            return NamedService;
        }());
        var TestServiceWithParameters = /** @class */ (function () {
            function TestServiceWithParameters(testClass, secondTest, megaService) {
                this.testClass = testClass;
                this.secondTest = secondTest;
                this.megaService = megaService;
            }
            TestServiceWithParameters = __decorate([
                Service_1.Service(),
                __param(1, Inject_1.Inject(function (type) { return SecondTestService; })),
                __param(2, Inject_1.Inject("mega.service")),
                __metadata("design:paramtypes", [TestService, Object, Object])
            ], TestServiceWithParameters);
            return TestServiceWithParameters;
        }());
        Container_1.Container.get(TestServiceWithParameters).testClass.should.be.instanceOf(TestService);
        Container_1.Container.get(TestServiceWithParameters).secondTest.should.be.instanceOf(SecondTestService);
        Container_1.Container.get(TestServiceWithParameters).megaService.should.be.instanceOf(NamedService);
    });
});
//# sourceMappingURL=Inject.spec.js.map