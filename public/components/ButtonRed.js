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
  displayName: "ButtonRed__ButtonBox",
  componentId: "sc-1omniea-0"
})(["min-width:36px;border:none;text-align:center;padding:8px;float:right;margin:1px;margin-top:5px;text-transform:uppercase;font-weight:bold;background-color:#DA291C;color:white;border-radius:4px;width:fit-content;font-size:.7em;&:hover{background-color:darkred;}"]);

var ButtonRed = function ButtonRed(_ref) {
  var mouseClick = _ref.mouseClick,
      buttonText = _ref.buttonText;
  return /*#__PURE__*/_react["default"].createElement(ButtonBox, {
    onClick: mouseClick
  }, buttonText);
};

ButtonRed.propTypes = {
  mouseClick: _propTypes["default"].func.isRequired,
  buttonText: _propTypes["default"].node.isRequired
};
var _default = ButtonRed;
exports["default"] = _default;