'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = require('recompose');

var withOpen = (0, _recompose.withState)('isOpen', 'setIsOpen', false);

exports.default = withOpen;