"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Container_1 = require("../../src/Container");
var UserRepository_1 = require("./UserRepository");
var User_1 = require("./User");
var userRepository = Container_1.Container.get(UserRepository_1.UserRepository);
userRepository.save(new User_1.User("Johny", "Cage"));
//# sourceMappingURL=app.js.map