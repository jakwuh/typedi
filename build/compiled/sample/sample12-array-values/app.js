"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("../../src/index");
var FactoryToken_1 = require("./FactoryToken");
var SugarFactory_1 = require("./SugarFactory");
var WaterFactory_1 = require("./WaterFactory");
var BeanFactory_1 = require("./BeanFactory");
index_1.Container.import([
    BeanFactory_1.BeanFactory,
    SugarFactory_1.SugarFactory,
    WaterFactory_1.WaterFactory,
]);
var factories = index_1.Container.getMany(FactoryToken_1.FactoryToken);
factories.forEach(function (factory) { return factory.create(); });
console.log(factories);
//# sourceMappingURL=app.js.map