"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("@services/api");
exports.setInitArgs = function (initArgs) {
    exports.DOMAIN = initArgs.domain;
    exports.API_KEY = initArgs.apiKey;
    api_1.fetch.defaults.baseURL = "https://" + exports.DOMAIN;
};
//# sourceMappingURL=config.js.map