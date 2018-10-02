'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = require('recompose');

var withData = (0, _recompose.withState)('data', 'setData', null);

exports.default = withData;