"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Service_1 = require("../../src/decorators/Service");
var QuestionRepository_1 = require("./QuestionRepository");
var QuestionController = /** @class */ (function () {
    function QuestionController(questionRepository) {
        this.questionRepository = questionRepository;
    }
    QuestionController.prototype.save = function (name) {
        if (name)
            this.questionRepository.userName = name;
        this.questionRepository.save();
    };
    QuestionController = __decorate([
        Service_1.Service(),
        __metadata("design:paramtypes", [QuestionRepository_1.QuestionRepository])
    ], QuestionController);
    return QuestionController;
}());
exports.QuestionController = QuestionController;
//# sourceMappingURL=QuestionController.js.map