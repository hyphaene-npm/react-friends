'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = require('recompose');

var _styleTabHandler = require('../items/styleTabHandler');

var _styleTabHandler2 = _interopRequireDefault(_styleTabHandler);

var _toggleHandler = require('../items/toggleHandler');

var _toggleHandler2 = _interopRequireDefault(_toggleHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withTabHandler = (0, _recompose.withHandlers)({
	onToggle: _toggleHandler2.default,
	onStyleTab: _styleTabHandler2.default
});

exports.default = withTabHandler;