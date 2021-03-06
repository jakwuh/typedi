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
/**
 * Thrown when DI cannot inject value into property decorated by @Inject decorator.
 */
var CannotInjectError = /** @class */ (function (_super) {
    __extends(CannotInjectError, _super);
    function CannotInjectError(target, propertyName) {
        var _this = _super.call(this, "Cannot inject value into \"" + target.constructor.name + "." + propertyName + "\". " +
            "Please make sure you setup reflect-metadata properly and you don't use interfaces without service tokens as injection value.") || this;
        _this.name = "ServiceNotFoundError";
        Object.setPrototypeOf(_this, CannotInjectError.prototype);
        return _this;
    }
    return CannotInjectError;
}(Error));
exports.CannotInjectError = CannotInjectError;
//# sourceMappingURL=CannotInjectError.js.map