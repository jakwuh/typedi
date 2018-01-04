"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("../../src/index");
require("./BodyFactory");
require("./WheelFactory");
require("./EngineFactory");
require("./CarFactory");
// we need to import all services we need to make sure they are injected properly
// setup services
var bodyFactory = index_1.Container.get("body.factory");
bodyFactory.color = 333;
var wheelFactory = index_1.Container.get("wheel.factory");
wheelFactory.size = 20;
var engineFactory = index_1.Container.get("engine.factory");
engineFactory.setSeries("3000");
// create a car using car factory
var carFactory = index_1.Container.get("car.factory");
carFactory.create();
//# sourceMappingURL=app.js.map