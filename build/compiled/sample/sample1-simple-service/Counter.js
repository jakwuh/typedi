"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Counter = /** @class */ (function () {
    function Counter() {
        this.counter = 0;
    }
    Counter.prototype.increase = function () {
        this.counter++;
    };
    Counter.prototype.getCount = function () {
        return this.counter;
    };
    return Counter;
}());
exports.Counter = Counter;
//# sourceMappingURL=Counter.js.map