'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleTabHandler = function styleTabHandler(props) {
  return function (tabId) {
    return (0, _classnames2.default)({ active: props.activeTab === tabId });
  };
};

exports.default = styleTabHandler;