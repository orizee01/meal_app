"use strict";

var _require = require("winston"),
    format = _require.format,
    createLogger = _require.createLogger,
    transports = _require.transports;

var timestamp = format.timestamp,
    combine = format.combine,
    errors = format.errors,
    printf = format.printf,
    json = format.json;


var devLogger = function devLogger() {
  var logFormat = printf(function (_ref) {
    var level = _ref.level,
        message = _ref.message,
        timestamp = _ref.timestamp,
        stack = _ref.stack;

    return timestamp + " - " + level.toUpperCase().padEnd(5) + " - " + (stack || message);
  });
  return createLogger({
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), logFormat),
    defaultMeta: { service: "user-service" },
    transports: [new transports.File({
      filename: "./server.log"
    }), new transports.Console()]
  });
};

var prodLogger = function prodLogger() {
  var logFormat = printf(function (_ref2) {
    var level = _ref2.level,
        message = _ref2.message,
        timestamp = _ref2.timestamp,
        stack = _ref2.stack;

    return timestamp + " - " + level.toUpperCase().padEnd(5) + " - " + (stack || message);
  });

  return createLogger({
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), logFormat),
    transports: [new transports.Console()]
  });
};

var testLogger = function testLogger() {
  var logFormat = printf(function (_ref3) {
    var level = _ref3.level,
        message = _ref3.message,
        timestamp = _ref3.timestamp,
        stack = _ref3.stack;

    return timestamp + " - " + level.toUpperCase().padEnd(5) + " - " + (stack || message);
  });

  return createLogger({
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), logFormat),
    transports: [new transports.Console()]
  });
};

module.exports = {
  prodLogger: prodLogger, devLogger: devLogger, testLogger: testLogger
};
//# sourceMappingURL=logger.js.map
