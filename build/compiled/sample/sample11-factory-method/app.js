"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Container_1 = require("../../src/Container");
var Car_1 = require("./Car");
var car = Container_1.Container.get(Car_1.Car);
console.log(car);
//# sourceMappingURL=app.js.map