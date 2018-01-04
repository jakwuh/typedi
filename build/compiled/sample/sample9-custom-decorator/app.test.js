"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Container_1 = require("../../src/Container");
var UserRepository_1 = require("./UserRepository");
var User_1 = require("./User");
var TestLogger_1 = require("./TestLogger");
var logger = new TestLogger_1.TestLogger();
Container_1.Container.set(UserRepository_1.UserRepository, new UserRepository_1.UserRepository(logger));
var userRepository = Container_1.Container.get(UserRepository_1.UserRepository);
userRepository.save(new User_1.User("Johny", "Cage"));
console.log("last message in test logger: ", logger.lastMessage);
//# sourceMappingURL=app.test.js.map