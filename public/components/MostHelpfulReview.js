"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Stars = _interopRequireDefault(require("./Stars"));

var _NameDate = _interopRequireDefault(require("./NameDate"));

var _api = _interopRequireDefault(require("./api"));

var Container = _styledComponents["default"].div.withConfig({
  displayName: "MostHelpfulReview__Container",
  componentId: "psz81w-0"
})(["display:flex;flex-direction:column;margin:5px;"]);

var Title = _styledComponents["default"].p.withConfig({
  displayName: "MostHelpfulReview__Title",
  componentId: "psz81w-1"
})(["font-size:.9em;font-weight:bold;"]);

var ReviewTitle = _styledComponents["default"].h2.withConfig({
  displayName: "MostHelpfulReview__ReviewTitle",
  componentId: "psz81w-2"
})(["margin:10px 20px 5px 0;"]);

var Text = _styledComponents["default"].p.withConfig({
  displayName: "MostHelpfulReview__Text",
  componentId: "psz81w-3"
})(["line-height:1.4em;margin:25px 20px 25px 5px;"]);

var Last = _styledComponents["default"].div.withConfig({
  displayName: "MostHelpfulReview__Last",
  componentId: "psz81w-4"
})(["display:flex;flex-grow:1;align-items:flex-end;"]);

var MostHelpfulReview = function MostHelpfulReview(_ref) {
  var productId = _ref.productId,
      favorable = _ref.favorable;

  var _useState = (0, _react.useState)({
    name: '',
    date: '2020-01-01',
    age: 2,
    purchase_type: 1,
    rating_overall: 3
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      review = _useState2[0],
      setReview = _useState2[1];

  var getFromApi = function getFromApi(pathString, cb) {
    fetch(pathString, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      return cb(data);
    });
  };

  var getMostHelpfulReview = function getMostHelpfulReview() {
    if (productId) {
      var order = favorable ? 'DESC' : 'ASC';
      getFromApi("".concat(_api["default"], "/").concat(productId, "/rating_overall/").concat(order, "/0/1"), function (data) {
        return setReview(data[0]);
      });
    }
  };

  (0, _react.useEffect)(function () {
    return getMostHelpfulReview();
  }, [productId]);
  var total = review.helpful_yes + review.helpful_no;
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Title, null, "Most Helpful ", favorable ? 'Favorable' : 'Critical', " Review"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Stars["default"], {
    ratingOverall: review.rating_overall
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_NameDate["default"], {
    name: review.name,
    date: review.date,
    age: review.age,
    purchaseType: review.purchase_type
  })), /*#__PURE__*/_react["default"].createElement(ReviewTitle, null, review.title), /*#__PURE__*/_react["default"].createElement(Text, null, review.body), /*#__PURE__*/_react["default"].createElement(Last, null, /*#__PURE__*/_react["default"].createElement("div", null, review.helpful_yes, " of ", total, " people found this helpful")));
};

MostHelpfulReview.propTypes = {
  productId: _propTypes["default"].string.isRequired,
  favorable: _propTypes["default"].bool.isRequired
};
var _default = MostHelpfulReview;
exports["default"] = _default;