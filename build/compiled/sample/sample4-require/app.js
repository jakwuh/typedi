"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("../../src/index");
var CoffeeMaker_1 = require("./CoffeeMaker");
var coffeeMaker = index_1.Container.get(CoffeeMaker_1.CoffeeMaker);
coffeeMaker.make();
//# sourceMappingURL=app.js.map