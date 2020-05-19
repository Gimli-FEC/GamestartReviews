"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Container = _styledComponents["default"].div.withConfig({
  displayName: "AverageRatings__Container",
  componentId: "sc-1vmvwkl-0"
})(["margin:5px;"]);

var Title = _styledComponents["default"].p.withConfig({
  displayName: "AverageRatings__Title",
  componentId: "sc-1vmvwkl-1"
})(["font-size:.9em;font-weight:bold;"]);

var AverageRatings = function AverageRatings() {
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Title, null, "Average Customer Ratings"));
};

var _default = AverageRatings;
exports["default"] = _default;