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
var Container_1 = require("../../../src/Container");
var Service_1 = require("../../../src/decorators/Service");
var Inject_1 = require("../../../src/decorators/Inject");
var chai_1 = require("chai");
describe("github issues > #40 Constructor inject not working", function () {
    beforeEach(function () { return Container_1.Container.reset(); });
    it("should work properly", function () {
        var AccessTokenService = /** @class */ (function () {
            function AccessTokenService(moment, jsonwebtoken, jwt) {
                this.moment = moment;
                this.jsonwebtoken = jsonwebtoken;
                this.jwt = jwt;
            }
            AccessTokenService = __decorate([
                Service_1.Service("AccessTokenService"),
                __param(0, Inject_1.Inject("moment")),
                __param(1, Inject_1.Inject("jsonwebtoken")),
                __param(2, Inject_1.Inject("cfg.auth.jwt")),
                __metadata("design:paramtypes", [Object, Object, Object])
            ], AccessTokenService);
            return AccessTokenService;
        }());
        Container_1.Container.set("moment", "A");
        Container_1.Container.set("jsonwebtoken", "B");
        Container_1.Container.set("cfg.auth.jwt", "C");
        var accessTokenService = Container_1.Container.get("AccessTokenService");
        chai_1.expect(accessTokenService.moment).not.to.be.undefined;
        chai_1.expect(accessTokenService.jsonwebtoken).not.to.be.undefined;
        chai_1.expect(accessTokenService.jwt).not.to.be.undefined;
        accessTokenService.moment.should.be.equal("A");
        accessTokenService.jsonwebtoken.should.be.equal("B");
        accessTokenService.jwt.should.be.equal("C");
    });
});
//# sourceMappingURL=issue-40.spec.js.map