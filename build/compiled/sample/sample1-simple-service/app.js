"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("../../src/index");
var CarFactory_1 = require("./CarFactory");
var Counter_1 = require("./Counter");
var carFactory = index_1.Container.get(CarFactory_1.CarFactory);
carFactory.create();
var counter = index_1.Container.get(Counter_1.Counter);
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
//# sourceMappingURL=app.js.map