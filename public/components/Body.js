"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var Title = _styledComponents["default"].h2.withConfig({
  displayName: "Body__Title",
  componentId: "sc-1ldggnk-0"
})(["margin:10px 20px 5px 0;"]);

var Text = _styledComponents["default"].p.withConfig({
  displayName: "Body__Text",
  componentId: "sc-1ldggnk-1"
})(["line-height:1.4em;margin:25px 20px 25px 5px;"]);

var Recommended = _styledComponents["default"].p.withConfig({
  displayName: "Body__Recommended",
  componentId: "sc-1ldggnk-2"
})(["margin:30px 5px;font-size:.8em;"]);

var Body = function Body(_ref) {
  var title = _ref.title,
      body = _ref.body,
      recommended = _ref.recommended;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Title, null, title), /*#__PURE__*/_react["default"].createElement(Text, null, body), recommended ? /*#__PURE__*/_react["default"].createElement(Recommended, null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCheckCircle
  }), /*#__PURE__*/_react["default"].createElement("b", null, " Yes, "), "I recommend this product.") : /*#__PURE__*/_react["default"].createElement(Recommended, null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTimesCircle
  }), /*#__PURE__*/_react["default"].createElement("b", null, " No, "), "I do not recommend this product."));
};

Body.propTypes = {
  title: _propTypes["default"].string.isRequired,
  body: _propTypes["default"].string.isRequired,
  recommended: _propTypes["default"].number.isRequired
};
var _default = Body;
exports["default"] = _default;