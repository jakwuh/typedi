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
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = require("../Token");
/**
 * Thrown when requested service was not found.
 */
var ServiceNotFoundError = /** @class */ (function (_super) {
    __extends(ServiceNotFoundError, _super);
    function ServiceNotFoundError(identifier) {
        var _this = _super.call(this) || this;
        _this.name = "ServiceNotFoundError";
        if (typeof identifier === "string") {
            _this.message = "Service \"" + identifier + "\" was not found, looks like it was not registered in the container. " +
                ("Register it by calling Container.set(\"" + identifier + "\", ...) before using service.");
        }
        else if (identifier instanceof Token_1.Token && identifier.name) {
            _this.message = "Service \"" + identifier.name + "\" was not found, looks like it was not registered in the container. " +
                "Register it by calling Container.set before using service.";
        }
        else if (identifier instanceof Token_1.Token) {
            _this.message = "Service with a given token was not found, looks like it was not registered in the container. " +
                "Register it by calling Container.set before using service.";
        }
        Object.setPrototypeOf(_this, ServiceNotFoundError.prototype);
        return _this;
    }
    return ServiceNotFoundError;
}(Error));
exports.ServiceNotFoundError = ServiceNotFoundError;
//# sourceMappingURL=ServiceNotFoundError.js.map