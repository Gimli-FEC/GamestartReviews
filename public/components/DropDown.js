"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var SelectMenu = _styledComponents["default"].div.withConfig({
  displayName: "DropDown__SelectMenu",
  componentId: "sc-11itve3-0"
})(["display:inline-block;float:right;margin:20px;span{font-weight:bold;font-size:.9em;}span:nth-child(2){border:1pt transparent dotted;}&:hover span:nth-child(2){border-color:black;}svg{margin-left:5px;}"]);

var Selections = _styledComponents["default"].div.withConfig({
  displayName: "DropDown__Selections",
  componentId: "sc-11itve3-1"
})(["position:absolute;display:block;border:1px darkgray solid;width:230px;padding:0;z-index:2;span{display:block;background-color:white;padding:8px 30px 8px 10px;}span:hover{background-color:#da291c;color:white;}"]);

var DropDown = function DropDown(_ref) {
  var selectionsArray = _ref.selectionsArray,
      handleSortChange = _ref.handleSortChange;

  var _useState = (0, _react.useState)(selectionsArray[0]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      displayMenu = _useState4[0],
      setDisplayMenu = _useState4[1];

  var onMenuToggle = function onMenuToggle() {
    setDisplayMenu(!displayMenu);
  };

  var onSelectionClick = function onSelectionClick(e) {
    onMenuToggle();
    setSelected(e.target.innerText);
    handleSortChange(e);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SelectMenu, null, /*#__PURE__*/_react["default"].createElement("div", {
    onFocus: onMenuToggle,
    onMouseOver: onMenuToggle
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Sort by: "), /*#__PURE__*/_react["default"].createElement("span", null, selected), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretDown
  })), displayMenu && /*#__PURE__*/_react["default"].createElement(Selections, null, selectionsArray.map(function (selection, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      role: "option",
      "aria-selected": true,
      tabIndex: 0,
      key: index.toString(),
      onClick: onSelectionClick,
      onKeyUp: onSelectionClick
    }, selection);
  }))));
};

DropDown.propTypes = {
  selectionsArray: _propTypes["default"].arrayOf(_propTypes.string).isRequired,
  handleSortChange: _propTypes["default"].func.isRequired
};
var _default = DropDown;
exports["default"] = _default;