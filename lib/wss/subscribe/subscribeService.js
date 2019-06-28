"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../services/config");
exports.subscribe = function (subscriber) {
    var url = "wss://" + config_1.DOMAIN + "/live/connector/v3/easy?domain=" + config_1.DOMAIN + "&apiKey=" + config_1.API_KEY + "&subscriber=" + subscriber;
    return new WebSocket(url);
};
