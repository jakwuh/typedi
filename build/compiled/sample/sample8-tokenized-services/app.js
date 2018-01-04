"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("../../src/index");
var Tokens_1 = require("./Tokens");
var FtpStore_1 = require("./FtpStore");
var FtpReader_1 = require("./FtpReader");
index_1.Container.set(Tokens_1.StoreService, new FtpStore_1.FtpStore());
index_1.Container.set(Tokens_1.ReaderService, new FtpReader_1.FtpReader());
var store = index_1.Container.get(Tokens_1.StoreService);
console.log(store.save());
var reader = index_1.Container.get(Tokens_1.ReaderService);
console.log(reader.read());
//# sourceMappingURL=app.js.map