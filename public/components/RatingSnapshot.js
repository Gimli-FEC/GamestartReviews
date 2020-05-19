"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _RatingRow = _interopRequireDefault(require("./RatingRow"));

var Container = _styledComponents["default"].div.withConfig({
  displayName: "RatingSnapshot__Container",
  componentId: "sc-1ej6xh9-0"
})(["margin:5px;"]);

var Title = _styledComponents["default"].p.withConfig({
  displayName: "RatingSnapshot__Title",
  componentId: "sc-1ej6xh9-1"
})(["font-size:.9em;font-weight:bold;"]);

var RatingSnapshot = function RatingSnapshot(_ref) {
  var rows = _ref.rows;
  rows = [{
    stars: 5,
    total: 435
  }, {
    stars: 4,
    total: 115
  }, {
    stars: 3,
    total: 55
  }, {
    stars: 2,
    total: 18
  }, {
    stars: 1,
    total: 33
  }];
  var overallTotal = rows.reduce(function (sum, row) {
    return sum + row.total;
  }, 0);
  rows.forEach(function (row) {
    row.width = (row.total / overallTotal).toString();
  });
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Title, null, "Rating Snapshot"), /*#__PURE__*/_react["default"].createElement("p", null, "Select a row below to filter reviews."), rows.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement(_RatingRow["default"], {
      key: index.toString(),
      stars: row.stars,
      width: row.width,
      total: row.total
    });
  }));
};

var _default = RatingSnapshot;
exports["default"] = _default;