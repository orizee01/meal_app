'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _logger = require('./config/env/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8080;
var app = (0, _express2.default)();

global.logger = _logger2.default;
app.listen(port);
_logger2.default.info('Application started on port ' + port);

exports.default = app;
//# sourceMappingURL=index.js.map
