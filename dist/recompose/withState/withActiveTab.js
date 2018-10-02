'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = require('recompose');

var withActiveTab = function withActiveTab(defaultTab) {
  return (0, _recompose.withState)('activeTab', 'setActiveTab', defaultTab);
};

exports.default = withActiveTab;