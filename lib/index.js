"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./auth");
var helpers_1 = require("./services/helpers");
var teler = __importStar(require("./teler"));
var wss = __importStar(require("./wss"));
exports.default = (function (initArgs) {
    helpers_1.validateInitArgs(initArgs);
    auth_1.auth();
    return {
        teler: teler,
        wss: wss,
    };
});
//# sourceMappingURL=index.js.map