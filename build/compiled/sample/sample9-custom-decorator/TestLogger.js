"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestLogger = /** @class */ (function () {
    function TestLogger() {
    }
    TestLogger.prototype.log = function (message) {
        this.lastMessage = message;
    };
    return TestLogger;
}());
exports.TestLogger = TestLogger;
//# sourceMappingURL=TestLogger.js.map