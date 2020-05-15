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

var _api = _interopRequireDefault(require("./api"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _Stars = _interopRequireDefault(require("./Stars"));

var _NameDate = _interopRequireDefault(require("./NameDate"));

var _Body = _interopRequireDefault(require("./Body"));

var _Bars = _interopRequireDefault(require("./Bars"));

var ReviewGrid = _styledComponents["default"].li.withConfig({
  displayName: "Review__ReviewGrid",
  componentId: "xvefpq-0"
})(["display:grid;grid-template-columns:1fr 13fr 5fr;grid-gap:10px;background-color:#fff;color:#444;border-top:1px lightgray solid;padding:20px;clear:both;"]);

var RightColumn = _styledComponents["default"].div.withConfig({
  displayName: "Review__RightColumn",
  componentId: "xvefpq-1"
})(["font-size:1em;text-align:right;span span:nth-child(1){color:#da291c;}span span:nth-child(2){margin-left:5px;font-weight:400;}"]);

var Review = function Review(_ref) {
  var avatar = _ref.avatar,
      gender = _ref.gender,
      name = _ref.name,
      age = _ref.age,
      date = _ref.date,
      title = _ref.title,
      body = _ref.body,
      recommended = _ref.recommended,
      verified = _ref.verified,
      purchaseType = _ref.purchaseType,
      ratingOverall = _ref.ratingOverall,
      ratingGraphics = _ref.ratingGraphics,
      ratingGameplay = _ref.ratingGameplay,
      ratingAppeal = _ref.ratingAppeal;
  var verifiedText = verified ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  })), /*#__PURE__*/_react["default"].createElement("span", null, "Verified Purchaser")) : null;
  var avatarPic = gender ? /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(_api["default"], "/images/female-avatar-small.png"),
    alt: "Female Avatar"
  }) : /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(_api["default"], "/images/male-avatar-small.png"),
    alt: "Male Avatar"
  });
  return /*#__PURE__*/_react["default"].createElement(ReviewGrid, null, avatarPic, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Stars["default"], {
    ratingOverall: ratingOverall
  }), /*#__PURE__*/_react["default"].createElement(_NameDate["default"], {
    name: name,
    date: date,
    age: age,
    purchaseType: purchaseType
  }), /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    title: title,
    body: body,
    recommended: recommended
  })), /*#__PURE__*/_react["default"].createElement(RightColumn, null, verifiedText, /*#__PURE__*/_react["default"].createElement(_Bars["default"], {
    ratingGraphics: ratingGraphics,
    ratingGameplay: ratingGameplay,
    ratingAppeal: ratingAppeal
  })));
};

Review.propTypes = {
  date: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired,
  body: _propTypes["default"].string.isRequired,
  recommended: _propTypes["default"].number.isRequired,
  verified: _propTypes["default"].number.isRequired,
  purchaseType: _propTypes["default"].number.isRequired,
  ratingOverall: _propTypes["default"].number.isRequired,
  ratingGraphics: _propTypes["default"].number.isRequired,
  ratingGameplay: _propTypes["default"].number.isRequired,
  ratingAppeal: _propTypes["default"].number.isRequired,
  name: _propTypes["default"].string.isRequired,
  age: _propTypes["default"].number.isRequired,
  gender: _propTypes["default"].number.isRequired,
  avatar: _propTypes["default"].string.isRequired
};
var _default = Review;
exports["default"] = _default;