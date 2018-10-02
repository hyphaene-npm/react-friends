"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var toggleHandler = function toggleHandler(props) {
	return function (tab) {
		return function () {
			if (props.activeTab !== tab) {
				props.setActiveTab(tab);
			}
		};
	};
};

exports.default = toggleHandler;