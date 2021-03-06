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
 * Thrown when service is registered without type.
 */
var MissingProvidedServiceTypeError = /** @class */ (function (_super) {
    __extends(MissingProvidedServiceTypeError, _super);
    function MissingProvidedServiceTypeError(identifier) {
        var _this = _super.call(this, "Cannot determine a class of the requesting service \"" + identifier + "\"") || this;
        _this.name = "ServiceNotFoundError";
        Object.setPrototypeOf(_this, MissingProvidedServiceTypeError.prototype);
        return _this;
    }
    return MissingProvidedServiceTypeError;
}(Error));
exports.MissingProvidedServiceTypeError = MissingProvidedServiceTypeError;
//# sourceMappingURL=MissingProvidedServiceTypeError.js.map