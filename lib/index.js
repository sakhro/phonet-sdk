"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./auth");
var helpers_1 = require("./services/helpers");
var teler = require("./teler");
var wss = require("./wss");
exports.default = (function (initArgs) {
    helpers_1.validateInitArgs(initArgs);
    auth_1.auth();
    return {
        teler: teler,
        wss: wss,
    };
});
