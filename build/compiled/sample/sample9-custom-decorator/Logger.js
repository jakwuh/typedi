"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = require("../../src/Container");
var ConsoleLogger_1 = require("./ConsoleLogger");
function Logger() {
    return function (object, propertyName, index) {
        var logger = new ConsoleLogger_1.ConsoleLogger();
        Container_1.Container.registerHandler({ object: object, propertyName: propertyName, index: index, value: function (containerInstance) { return logger; } });
    };
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map