"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ReviewCount = _styledComponents["default"].span.withConfig({
  displayName: "ReviewPagination__ReviewCount",
  componentId: "jzbic5-0"
})(["font-weight:bold;font-size:.9em;padding:20px;"]);

var ReviewPagination = function ReviewPagination(_ref) {
  var reviewsOffset = _ref.reviewsOffset,
      totalReviews = _ref.totalReviews,
      reviewsPerPage = _ref.reviewsPerPage;
  var start = reviewsOffset + 1;
  var finish = reviewsOffset + reviewsPerPage;
  var reviewsString = "".concat(start, "-").concat(finish, " of ").concat(totalReviews);
  return /*#__PURE__*/_react["default"].createElement(ReviewCount, null, reviewsString);
};

ReviewPagination.propTypes = {
  reviewsOffset: _propTypes["default"].number.isRequired,
  totalReviews: _propTypes["default"].number.isRequired,
  reviewsPerPage: _propTypes["default"].number.isRequired
};
var _default = ReviewPagination;
exports["default"] = _default;