"use strict";

var _require = require("./logger"),
    prodLogger = _require.prodLogger,
    devLogger = _require.devLogger,
    testLogger = _require.testLogger;

var NODE_ENV = process.env.NODE_ENV;


var logger = devLogger();
//  NODE_ENV === "development" ? devLogger() : NODE_ENV === "production" ? prodLogger() : testLogger();

module.exports = logger;
//# sourceMappingURL=index.js.map
