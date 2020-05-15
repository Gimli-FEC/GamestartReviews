"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Avatar = function Avatar(_ref) {
  var avatar = _ref.avatar;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "user-avatar",
    src: avatar
  }));
};

Avatar.propTypes = {
  avatar: _propTypes["default"].string.isRequired
};
var _default = Avatar;
exports["default"] = _default;