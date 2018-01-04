"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("../../src/index");
var Driver_1 = require("./Driver");
var FakeBus_1 = require("./FakeBus");
var FakeCar_1 = require("./FakeCar");
var Bus_1 = require("./Bus");
var Car_1 = require("./Car");
// provide fake implementations
index_1.Container.set([
    { id: Bus_1.Bus, value: new FakeBus_1.FakeBus() },
    { id: Car_1.Car, value: new FakeCar_1.FakeCar() }
]);
// drive!
var driver = index_1.Container.get(Driver_1.Driver);
driver.driveBus();
driver.driveCar();
//# sourceMappingURL=app.js.map