"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("../../src/index");
var QuestionRepository_1 = require("./QuestionRepository");
var QuestionController_1 = require("./QuestionController");
index_1.Container.import([
    QuestionController_1.QuestionController,
    QuestionRepository_1.QuestionRepository,
]);
var request1 = { param: "Timber" };
var controller1 = index_1.Container.of(request1).get(QuestionController_1.QuestionController);
controller1.save("Timber");
index_1.Container.reset(request1);
// Container.removeFromRequest(request1, QuestionController);
var request2 = { param: "Guest" };
var controller2 = index_1.Container.of(request2).get(QuestionController_1.QuestionController);
controller2.save("");
index_1.Container.reset(request2);
//# sourceMappingURL=app.js.map