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
require("chai");
var Container_1 = require("../src/Container");
var Service_1 = require("../src/decorators/Service");
var Token_1 = require("../src/Token");
var chai_1 = require("chai");
var ServiceNotFoundError_1 = require("../src/error/ServiceNotFoundError");
describe("Container", function () {
    beforeEach(function () { return Container_1.Container.reset(); });
    describe("get", function () {
        it("should be able to get a boolean", function () {
            var booleanTrue = "boolean.true";
            var booleanFalse = "boolean.false";
            Container_1.Container.set(booleanTrue, true);
            Container_1.Container.set(booleanFalse, false);
            Container_1.Container.get(booleanTrue).should.be.true;
            Container_1.Container.get(booleanFalse).should.be.false;
        });
        it("should be able to get an empty string", function () {
            var emptyString = "emptyString";
            Container_1.Container.set(emptyString, "");
            Container_1.Container.get(emptyString).should.be.eq("");
        });
        it("should be able to get the 0 number", function () {
            var zero = "zero";
            Container_1.Container.set(zero, 0);
            Container_1.Container.get(zero).should.be.eq(0);
        });
    });
    describe("set", function () {
        it("should be able to set a class into the container", function () {
            var TestService = /** @class */ (function () {
                function TestService(name) {
                    this.name = name;
                }
                return TestService;
            }());
            var testService = new TestService("this is test");
            Container_1.Container.set(TestService, testService);
            Container_1.Container.get(TestService).should.be.equal(testService);
            Container_1.Container.get(TestService).name.should.be.equal("this is test");
        });
        it("should be able to set a named service", function () {
            var TestService = /** @class */ (function () {
                function TestService(name) {
                    this.name = name;
                }
                return TestService;
            }());
            var firstService = new TestService("first");
            Container_1.Container.set("first.service", firstService);
            var secondService = new TestService("second");
            Container_1.Container.set("second.service", secondService);
            Container_1.Container.get("first.service").name.should.be.equal("first");
            Container_1.Container.get("second.service").name.should.be.equal("second");
        });
        it("should be able to set a tokenized service", function () {
            var TestService = /** @class */ (function () {
                function TestService(name) {
                    this.name = name;
                }
                return TestService;
            }());
            var FirstTestToken = new Token_1.Token();
            var SecondTestToken = new Token_1.Token();
            var firstService = new TestService("first");
            Container_1.Container.set(FirstTestToken, firstService);
            var secondService = new TestService("second");
            Container_1.Container.set(SecondTestToken, secondService);
            Container_1.Container.get(FirstTestToken).name.should.be.equal("first");
            Container_1.Container.get(SecondTestToken).name.should.be.equal("second");
        });
        it("should override previous value if service is written second time", function () {
            var TestService = /** @class */ (function () {
                function TestService(name) {
                    this.name = name;
                }
                return TestService;
            }());
            var TestToken = new Token_1.Token();
            var firstService = new TestService("first");
            Container_1.Container.set(TestToken, firstService);
            Container_1.Container.get(TestToken).should.be.equal(firstService);
            Container_1.Container.get(TestToken).name.should.be.equal("first");
            var secondService = new TestService("second");
            Container_1.Container.set(TestToken, secondService);
            Container_1.Container.get(TestToken).should.be.equal(secondService);
            Container_1.Container.get(TestToken).name.should.be.equal("second");
        });
    });
    describe("set multiple", function () {
        it("should be able to provide a list of values", function () {
            var TestService = /** @class */ (function () {
                function TestService() {
                }
                return TestService;
            }());
            var TestServiceFactory = /** @class */ (function () {
                function TestServiceFactory() {
                }
                TestServiceFactory.prototype.create = function () {
                    return "test3-service-created-by-factory";
                };
                return TestServiceFactory;
            }());
            var testService = new TestService();
            var test1Service = new TestService();
            var test2Service = new TestService();
            Container_1.Container.set([
                { id: TestService, value: testService },
                { id: "test1-service", value: test1Service },
                { id: "test2-service", value: test2Service },
                { id: "test3-service", factory: [TestServiceFactory, "create"] },
            ]);
            Container_1.Container.get(TestService).should.be.equal(testService);
            Container_1.Container.get("test1-service").should.be.equal(test1Service);
            Container_1.Container.get("test2-service").should.be.equal(test2Service);
            Container_1.Container.get("test3-service").should.be.equal("test3-service-created-by-factory");
        });
    });
    describe("remove", function () {
        it("should be able to remove previously registered services", function () {
            var TestService = /** @class */ (function () {
                function TestService() {
                }
                return TestService;
            }());
            var testService = new TestService();
            var test1Service = new TestService();
            var test2Service = new TestService();
            Container_1.Container.set([
                { id: TestService, value: testService },
                { id: "test1-service", value: test1Service },
                { id: "test2-service", value: test2Service },
            ]);
            Container_1.Container.get(TestService).should.be.equal(testService);
            Container_1.Container.get("test1-service").should.be.equal(test1Service);
            Container_1.Container.get("test2-service").should.be.equal(test2Service);
            Container_1.Container.remove("test1-service", "test2-service");
            Container_1.Container.get(TestService).should.be.equal(testService);
            chai_1.expect(function () { return Container_1.Container.get("test1-service"); }).to.throw(ServiceNotFoundError_1.ServiceNotFoundError);
            chai_1.expect(function () { return Container_1.Container.get("test2-service"); }).to.throw(ServiceNotFoundError_1.ServiceNotFoundError);
        });
    });
    describe("reset", function () {
        it("should support container reset", function () {
            var TestService = /** @class */ (function () {
                function TestService(name) {
                    if (name === void 0) { name = "frank"; }
                    this.name = name;
                }
                return TestService;
            }());
            var testService = new TestService("john");
            Container_1.Container.set(TestService, testService);
            Container_1.Container.get(TestService).should.be.equal(testService);
            Container_1.Container.get(TestService).name.should.be.equal("john");
            Container_1.Container.reset();
            Container_1.Container.get(TestService).should.not.be.equal(testService);
            Container_1.Container.get(TestService).name.should.be.equal("frank");
        });
    });
    describe("registerHandler", function () {
        it("should have ability to pre-specify class initialization parameters", function () {
            var ExtraService = /** @class */ (function () {
                function ExtraService(luckyNumber, message) {
                    this.luckyNumber = luckyNumber;
                    this.message = message;
                }
                ExtraService = __decorate([
                    Service_1.Service(),
                    __metadata("design:paramtypes", [Number, String])
                ], ExtraService);
                return ExtraService;
            }());
            Container_1.Container.registerHandler({
                object: ExtraService,
                index: 0,
                value: function (containerInstance) { return 777; }
            });
            Container_1.Container.registerHandler({
                object: ExtraService,
                index: 1,
                value: function (containerInstance) { return "hello parameter"; }
            });
            Container_1.Container.get(ExtraService).luckyNumber.should.be.equal(777);
            Container_1.Container.get(ExtraService).message.should.be.equal("hello parameter");
        });
        it("should have ability to pre-specify initialized class properties", function () {
            function CustomInject(value) {
                return function (target, propertyName) {
                    Container_1.Container.registerHandler({
                        object: target,
                        propertyName: propertyName,
                        value: function (containerInstance) { return value; }
                    });
                };
            }
            var ExtraService = /** @class */ (function () {
                function ExtraService() {
                }
                __decorate([
                    CustomInject(888),
                    __metadata("design:type", Number)
                ], ExtraService.prototype, "badNumber", void 0);
                __decorate([
                    CustomInject("bye world"),
                    __metadata("design:type", String)
                ], ExtraService.prototype, "byeMessage", void 0);
                ExtraService = __decorate([
                    Service_1.Service()
                ], ExtraService);
                return ExtraService;
            }());
            Container_1.Container.get(ExtraService).badNumber.should.be.equal(888);
            Container_1.Container.get(ExtraService).byeMessage.should.be.equal("bye world");
        });
    });
    describe("set with ServiceMetadata passed", function () {
        it("should support factory functions", function () {
            var Engine = /** @class */ (function () {
                function Engine() {
                    this.serialNumber = "A-123";
                }
                return Engine;
            }());
            var Car = /** @class */ (function () {
                function Car(engine) {
                    this.engine = engine;
                }
                return Car;
            }());
            Container_1.Container.set({
                id: Car,
                factory: function () { return new Car(new Engine()); }
            });
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
            var Car = /** @class */ (function () {
                function Car(engine) {
                    this.engine = engine;
                }
                return Car;
            }());
            var CarFactory = /** @class */ (function () {
                function CarFactory(engine) {
                    this.engine = engine;
                }
                CarFactory.prototype.createCar = function () {
                    return new Car(this.engine);
                };
                CarFactory = __decorate([
                    Service_1.Service(),
                    __metadata("design:paramtypes", [Engine])
                ], CarFactory);
                return CarFactory;
            }());
            Container_1.Container.set({
                id: Car,
                factory: [CarFactory, "createCar"]
            });
            Container_1.Container.get(Car).engine.serialNumber.should.be.equal("A-123");
        });
        it("should support tokenized services from factories", function () {
            var Bus = /** @class */ (function () {
                function Bus() {
                }
                Bus.prototype.getColor = function () {
                    return "yellow";
                };
                return Bus;
            }());
            var VehicleFactory = /** @class */ (function () {
                function VehicleFactory() {
                }
                VehicleFactory.prototype.createBus = function () {
                    return new Bus();
                };
                return VehicleFactory;
            }());
            var VehicleService = new Token_1.Token();
            Container_1.Container.set({
                id: VehicleService,
                factory: [VehicleFactory, "createBus"]
            });
            Container_1.Container.get(VehicleService).getColor().should.be.equal("yellow");
        });
    });
});
//# sourceMappingURL=Container.spec.js.map