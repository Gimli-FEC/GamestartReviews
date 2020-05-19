"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ButtonBox = _styledComponents["default"].button.withConfig({
  displayName: "Button__ButtonBox",
  componentId: "sc-1o0tfkx-0"
})(["min-width:36px;height:32px;border:none;text-align:center;float:right;margin:1px;margin-top:13px;background-color:whitesmoke;color:lightgray;", ""], function (_ref) {
  var active = _ref.active;
  return active && "\n    background-color: gainsboro;\n    color: black;\n    &:hover {\n      box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);\n    }\n  ";
});

var Button = function Button(_ref2) {
  var active = _ref2.active,
      mouseClick = _ref2.mouseClick,
      buttonText = _ref2.buttonText;
  return /*#__PURE__*/_react["default"].createElement(ButtonBox, {
    active: active,
    onClick: mouseClick
  }, buttonText);
};

Button.propTypes = {
  active: _propTypes["default"].bool.isRequired,
  mouseClick: _propTypes["default"].func.isRequired,
  buttonText: _propTypes["default"].node.isRequired
};
var _default = Button;
exports["default"] = _default;