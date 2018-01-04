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
var Container_1 = require("../../src/Container");
var Service_1 = require("../../src/decorators/Service");
describe("Service Decorator", function () {
    beforeEach(function () { return Container_1.Container.reset(); });
    it("should register class in the container, and its instance should be retrievable", function () {
        var TestService = /** @class */ (function () {
            function TestService() {
            }
            TestService = __decorate([
                Service_1.Service()
            ], TestService);
            return TestService;
        }());
        var NamedService = /** @class */ (function () {
            function NamedService() {
            }
            NamedService = __decorate([
                Service_1.Service("super.service")
            ], NamedService);
            return NamedService;
        }());
        Container_1.Container.get(TestService).should.be.instanceOf(TestService);
        Container_1.Container.get(TestService).should.not.be.instanceOf(NamedService);
    });
    it("should register class in the container with given name, and its instance should be retrievable", function () {
        var TestService = /** @class */ (function () {
            function TestService() {
            }
            TestService = __decorate([
                Service_1.Service()
            ], TestService);
            return TestService;
        }());
        var NamedService = /** @class */ (function () {
            function NamedService() {
            }
            NamedService = __decorate([
                Service_1.Service("super.service")
            ], NamedService);
            return NamedService;
        }());
        Container_1.Container.get("super.service").should.be.instanceOf(NamedService);
        Container_1.Container.get("super.service").should.not.be.instanceOf(TestService);
    });
    it("should register class in the container, and its parameter dependencies should be properly initialized", function () {
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
        var TestServiceWithParameters = /** @class */ (function () {
            function TestServiceWithParameters(testClass, secondTest) {
                this.testClass = testClass;
                this.secondTest = secondTest;
            }
            TestServiceWithParameters = __decorate([
                Service_1.Service(),
                __metadata("design:paramtypes", [TestService, SecondTestService])
            ], TestServiceWithParameters);
            return TestServiceWithParameters;
        }());
        Container_1.Container.get(TestServiceWithParameters).should.be.instanceOf(TestServiceWithParameters);
        Container_1.Container.get(TestServiceWithParameters).testClass.should.be.instanceOf(TestService);
        Container_1.Container.get(TestServiceWithParameters).secondTest.should.be.instanceOf(SecondTestService);
    });
    it("should support factory functions", function () {
        var Engine = /** @class */ (function () {
            function Engine(serialNumber) {
                this.serialNumber = serialNumber;
            }
            return Engine;
        }());
        function createCar() {
            return new Car("BMW", new Engine("A-123"));
        }
        var Car = /** @class */ (function () {
            function Car(name, engine) {
                this.name = name;
                this.engine = engine;
            }
            Car = __decorate([
                Service_1.Service({ factory: createCar }),
                __metadata("design:paramtypes", [String, Engine])
            ], Car);
            return Car;
        }());
        Container_1.Container.get(Car).name.should.be.equal("BMW");
        Container_1.Container.get(Car).engine.serialNumber.should.be.equal("A-123");
    });
    it("should support factory classes", function () {
        var Engine = /** @class */ (function () {
            function Engine() {
                this.serialNumber = "A-123";
            }
            Engine = __decorate([
                Service_1.Service()
            ], Engine);
            return Engine;
        }());
        var CarFactory = /** @class */ (function () {
            function CarFactory(engine) {
                this.engine = engine;
            }
            CarFactory.prototype.createCar = function () {
                return new Car("BMW", this.engine);
            };
            CarFactory = __decorate([
                Service_1.Service(),
                __metadata("design:paramtypes", [Engine])
            ], CarFactory);
            return CarFactory;
        }());
        var Car = /** @class */ (function () {
            function Car(name, engine) {
                this.engine = engine;
                this.name = name;
            }
            Car = __decorate([
                Service_1.Service({ factory: [CarFactory, "createCar"] }),
                __metadata("design:paramtypes", [String, Engine])
            ], Car);
            return Car;
        }());
        Container_1.Container.get(Car).name.should.be.equal("BMW");
        Container_1.Container.get(Car).engine.serialNumber.should.be.equal("A-123");
    });
    it("should support factory function with arguments", function () {
        var Engine = /** @class */ (function () {
            function Engine() {
                this.type = "V8";
            }
            Engine = __decorate([
                Service_1.Service()
            ], Engine);
            return Engine;
        }());
        var CarFactory = /** @class */ (function () {
            function CarFactory() {
            }
            CarFactory.prototype.createCar = function (engine) {
                engine.type = "V6";
                return new Car(engine);
            };
            CarFactory = __decorate([
                Service_1.Service()
            ], CarFactory);
            return CarFactory;
        }());
        var Car = /** @class */ (function () {
            function Car(engine) {
                this.engine = engine;
            }
            Car = __decorate([
                Service_1.Service({ factory: [CarFactory, "createCar"] }),
                __metadata("design:paramtypes", [Engine])
            ], Car);
            return Car;
        }());
        Container_1.Container.get(Car).engine.type.should.be.equal("V6");
    });
});
//# sourceMappingURL=Service.spec.js.map