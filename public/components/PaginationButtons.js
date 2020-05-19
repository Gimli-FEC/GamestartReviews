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

var _Button = _interopRequireDefault(require("./Button"));

var ButtonContainer = _styledComponents["default"].div.withConfig({
  displayName: "PaginationButtons__ButtonContainer",
  componentId: "sc-3ydkuq-0"
})([""]);

var PaginationButtons = function PaginationButtons(_ref) {
  var prevButton = _ref.prevButton,
      nextButton = _ref.nextButton,
      prevActive = _ref.prevActive,
      nextActive = _ref.nextActive;

  var buttonLeft = /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretLeft,
    size: "lg"
  });

  var buttonRight = /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretRight,
    size: "lg"
  });

  return /*#__PURE__*/_react["default"].createElement(ButtonContainer, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    active: nextActive,
    mouseClick: nextButton,
    buttonText: buttonRight
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    active: prevActive,
    mouseClick: prevButton,
    buttonText: buttonLeft
  }));
};

PaginationButtons.propTypes = {
  prevButton: _propTypes["default"].func.isRequired,
  nextButton: _propTypes["default"].func.isRequired,
  prevActive: _propTypes["default"].bool.isRequired,
  nextActive: _propTypes["default"].bool.isRequired
};
var _default = PaginationButtons;
exports["default"] = _default;