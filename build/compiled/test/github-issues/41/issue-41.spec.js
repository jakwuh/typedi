"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Container_1 = require("../../../src/Container");
var Service_1 = require("../../../src/decorators/Service");
var Token_1 = require("../../../src/Token");
describe("github issues > #41 Token as service id in combination with factory", function () {
    beforeEach(function () { return Container_1.Container.reset(); });
    it("should work properly", function () {
        var SomeInterfaceToken = new Token_1.Token();
        var SomeInterfaceFactory = /** @class */ (function () {
            function SomeInterfaceFactory() {
            }
            SomeInterfaceFactory.prototype.create = function () {
                return new SomeImplementation();
            };
            SomeInterfaceFactory = __decorate([
                Service_1.Service()
            ], SomeInterfaceFactory);
            return SomeInterfaceFactory;
        }());
        var SomeImplementation = /** @class */ (function () {
            function SomeImplementation() {
            }
            SomeImplementation.prototype.foo = function () {
                return "hello implementation";
            };
            SomeImplementation = __decorate([
                Service_1.Service({
                    id: SomeInterfaceToken,
                    factory: [SomeInterfaceFactory, "create"]
                })
            ], SomeImplementation);
            return SomeImplementation;
        }());
        Container_1.Container.set("moment", "A");
        Container_1.Container.set("jsonwebtoken", "B");
        Container_1.Container.set("cfg.auth.jwt", "C");
        var someInterfaceImpl = Container_1.Container.get(SomeInterfaceToken);
        someInterfaceImpl.foo().should.be.equal("hello implementation");
    });
});
//# sourceMappingURL=issue-41.spec.js.map