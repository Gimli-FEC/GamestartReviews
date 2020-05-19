"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var RatingBars = _styledComponents["default"].span.withConfig({
  displayName: "Bars__RatingBars",
  componentId: "cxthvf-0"
})(["text-align:left;"]);

var BarHeading = _styledComponents["default"].p.withConfig({
  displayName: "Bars__BarHeading",
  componentId: "cxthvf-1"
})(["font-size:.7em;margin:23px 0 0 0;"]);

var Bars = function Bars(_ref) {
  var ratingGraphics = _ref.ratingGraphics,
      ratingGameplay = _ref.ratingGameplay,
      ratingAppeal = _ref.ratingAppeal;
  var headings = ['Graphics', 'Gameplay', 'Lasting Appeal'];
  var ratings = [ratingGraphics, ratingGameplay, ratingAppeal];
  var allBars = [];

  for (var i = 0; i < 3; i += 1) {
    var bars = (0, _toConsumableArray2["default"])(Array(ratings[i]).keys());
    var remainingBars = (0, _toConsumableArray2["default"])(Array(5 - ratings[i]).keys());
    allBars.push( /*#__PURE__*/_react["default"].createElement(RatingBars, {
      key: i.toString()
    }, /*#__PURE__*/_react["default"].createElement(BarHeading, null, headings[i]), bars.map(function (bar, index) {
      return /*#__PURE__*/_react["default"].createElement("svg", {
        height: "8",
        width: "20%",
        key: index.toString()
      }, /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "1,0 99,0 99,8 1,8",
        style: {
          fill: '#da291c'
        }
      }));
    }), remainingBars.map(function (bar, index) {
      return /*#__PURE__*/_react["default"].createElement("svg", {
        height: "8",
        width: "20%",
        key: index.toString()
      }, /*#__PURE__*/_react["default"].createElement("polygon", {
        points: "1,0 99,0 99,8 1,8",
        style: {
          fill: 'lightgray'
        }
      }));
    })));
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, allBars);
};

Bars.propTypes = {
  ratingGraphics: _propTypes["default"].number.isRequired,
  ratingGameplay: _propTypes["default"].number.isRequired,
  ratingAppeal: _propTypes["default"].number.isRequired
};
var _default = Bars;
exports["default"] = _default;