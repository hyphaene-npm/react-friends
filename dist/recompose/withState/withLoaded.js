'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = require('recompose');

var withLoaded = (0, _recompose.withState)('loaded', 'setLoaded', true);

exports.default = withLoaded;