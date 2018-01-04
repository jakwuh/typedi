"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("../../src/index");
var BmwCar_1 = require("./BmwCar");
var PorsheCar_1 = require("./PorsheCar");
// drive bmw
var bmwCar = index_1.Container.get(BmwCar_1.BmwCar);
console.log(bmwCar);
bmwCar.drive();
// drive porshe
var porsheCar = index_1.Container.get(PorsheCar_1.PorsheCar);
porsheCar.drive();
//# sourceMappingURL=app.js.map