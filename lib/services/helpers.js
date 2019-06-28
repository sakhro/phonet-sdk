"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
exports.validateInitArgs = function (args) {
    if (!args.domain) {
        throw new Error("Please provide your domain");
    }
    if (!args.apiKey) {
        throw new Error("Please provide your apiKey");
    }
    config_1.setInitArgs(args);
};
//# sourceMappingURL=helpers.js.map