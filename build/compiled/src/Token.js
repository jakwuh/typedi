"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used to create unique typed service identifier.
 * Useful when service has only interface, but don't have a class.
 */
var Token = /** @class */ (function () {
    /**
     * @param name Token name, optional and only used for debugging purposes.
     */
    function Token(name) {
        this.name = name;
    }
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=Token.js.map