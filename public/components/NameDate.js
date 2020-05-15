"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Container = _styledComponents["default"].div.withConfig({
  displayName: "NameDate__Container",
  componentId: "x6v04f-0"
})(["display:inline-block;position:relative;text-align:center;font-size:.8em;margin-top:10px;"]);

var Name = _styledComponents["default"].span.withConfig({
  displayName: "NameDate__Name",
  componentId: "x6v04f-1"
})(["font-weight:bold;&:hover{cursor:pointer;}"]);

var Tooltip = _styledComponents["default"].span.withConfig({
  displayName: "NameDate__Tooltip",
  componentId: "x6v04f-2"
})(["display:inline-block;background-color:darkgray;color:white;text-align:center;padding:20px;border:1px solid #888;position:absolute;z-index:1;left:50%;margin-left:-50%;top:25px;"]);

var NameDate = function NameDate(_ref) {
  var name = _ref.name,
      date = _ref.date,
      age = _ref.age,
      purchaseType = _ref.purchaseType;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var toggleNameTooltip = function toggleNameTooltip() {
    setShow(!show);
  };

  var tooltip = show ? /*#__PURE__*/_react["default"].createElement(Tooltip, {
    onMouseLeave: function onMouseLeave(e) {
      return toggleNameTooltip(e);
    }
  }, name) : null;
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Name, {
    name: name,
    onMouseEnter: function onMouseEnter(e) {
      return toggleNameTooltip(e);
    }
  }, name), tooltip, /*#__PURE__*/_react["default"].createElement("span", null, " \u2022 "), (0, _moment["default"])(date).fromNow());
};

NameDate.propTypes = {
  name: _propTypes["default"].string.isRequired,
  date: _propTypes["default"].string.isRequired,
  age: _propTypes["default"].number.isRequired,
  purchaseType: _propTypes["default"].number.isRequired
};
var _default = NameDate;
exports["default"] = _default;