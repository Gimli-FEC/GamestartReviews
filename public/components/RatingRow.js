"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Row = _styledComponents["default"].div.withConfig({
  displayName: "RatingRow__Row",
  componentId: "sc-6c97mx-0"
})(["display:flex;margin:5px 5px 5px 2px;width:75%;span:first-of-type{width:15%;}meter{width:100%;height:10px;margin:auto;}meter::-webkit-meter-optimum-value{background:#da291c;}span:nth-of-type(2){width:100px;text-align:center;}"]);

var RatingRow = function RatingRow(_ref) {
  var stars = _ref.stars,
      width = _ref.width,
      total = _ref.total;
  return /*#__PURE__*/_react["default"].createElement(Row, null, /*#__PURE__*/_react["default"].createElement("span", null, stars, " \u2605"), /*#__PURE__*/_react["default"].createElement("meter", {
    value: width
  }), /*#__PURE__*/_react["default"].createElement("span", null, total));
};

var _default = RatingRow;
exports["default"] = _default;