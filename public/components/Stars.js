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

var RatingStars = _styledComponents["default"].span.withConfig({
  displayName: "Stars__RatingStars",
  componentId: "sc-1h5zncl-0"
})(["position:relative;top:4px;margin:0 7px 7px 0;"]);

var Stars = function Stars(_ref) {
  var ratingOverall = _ref.ratingOverall;
  var stars = (0, _toConsumableArray2["default"])(Array(ratingOverall).keys());
  var remainingStars = (0, _toConsumableArray2["default"])(Array(5 - ratingOverall).keys());
  return /*#__PURE__*/_react["default"].createElement(RatingStars, null, stars.map(function (star) {
    return /*#__PURE__*/_react["default"].createElement("svg", {
      height: "20",
      width: "20",
      key: star.toString()
    }, /*#__PURE__*/_react["default"].createElement("polygon", {
      points: "100,10 40,198 190,78 10,78 160,198",
      transform: "scale(.1)",
      style: {
        fill: '#da291c',
        fillRule: 'nonzero'
      }
    }));
  }), remainingStars.map(function (star) {
    return /*#__PURE__*/_react["default"].createElement("svg", {
      height: "20",
      width: "20",
      key: star.toString()
    }, /*#__PURE__*/_react["default"].createElement("polygon", {
      points: "100,10 40,198 190,78 10,78 160,198",
      transform: "scale(.1)",
      style: {
        fill: 'lightgray',
        fillRule: 'nonzero'
      }
    }));
  }));
};

Stars.propTypes = {
  ratingOverall: _propTypes["default"].number.isRequired
};
var _default = Stars;
exports["default"] = _default;