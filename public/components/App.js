"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Review = _interopRequireDefault(require("./Review"));

var _DropDown = _interopRequireDefault(require("./DropDown"));

var _ReviewPagination = _interopRequireDefault(require("./ReviewPagination"));

var _PaginationButtons = _interopRequireDefault(require("./PaginationButtons"));

var _Button = _interopRequireDefault(require("./Button"));

var _ButtonRed = _interopRequireDefault(require("./ButtonRed"));

var _Filters = _interopRequireDefault(require("./Filters"));

var _RatingSnapshot = _interopRequireDefault(require("./RatingSnapshot"));

var _AverageRatings = _interopRequireDefault(require("./AverageRatings"));

var _MostHelpfulReview = _interopRequireDefault(require("./MostHelpfulReview"));

var _api = _interopRequireDefault(require("./api"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  body {\n    font-family: Arial, Helvetica, sans-serif;\n    line-height: 1.2;\n    padding: 80px 0;\n    max-width: 1280px;\n    margin: 0 auto;\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var Grid = _styledComponents["default"].div.withConfig({
  displayName: "App__Grid",
  componentId: "sc-16nyf4f-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;padding:20px;"]);

var ReviewsTitle = _styledComponents["default"].div.withConfig({
  displayName: "App__ReviewsTitle",
  componentId: "sc-16nyf4f-1"
})(["text-transform:uppercase;font-size:xx-large;"]);

var App = function App(props) {
  var REVIEWS_PER_PAGE = 5;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      reviews = _useState2[0],
      setReviews = _useState2[1];

  var _useState3 = (0, _react.useState)('Most Recent'),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      sortSelected = _useState4[0],
      setSortSelected = _useState4[1];

  var _useState5 = (0, _react.useState)('3'),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      productId = _useState6[0],
      setProductId = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      reviewsOffset = _useState8[0],
      setReviewsOffset = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      showFilters = _useState10[0],
      setShowFilters = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      totalReviews = _useState12[0],
      setTotalReviews = _useState12[1];

  var getUrlParams = function getUrlParams() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    setProductId(id);
    return id;
  };

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

  var getReviewsForId = function getReviewsForId() {
    if (productId) {
      var sort = sortSelected === 'Most Recent' ? 'date' : 'rating_overall';
      var order = sortSelected === 'Lowest to Highest Rating' ? 'ASC' : 'DESC';
      getFromApi("".concat(_api["default"], "/").concat(productId, "/").concat(sort, "/").concat(order, "/").concat(reviewsOffset, "/").concat(REVIEWS_PER_PAGE), setReviews);
    }
  };

  var pullTotalFromJson = function pullTotalFromJson(data) {
    setTotalReviews(data[0]['count(*)']);
  };

  var getTotalReviewsCount = function getTotalReviewsCount() {
    if (productId) {
      getFromApi("".concat(_api["default"], "/count/").concat(productId), pullTotalFromJson);
    }
  };

  (0, _react.useEffect)(function () {
    getReviewsForId(getUrlParams());
  }, [productId, sortSelected, reviewsOffset]);
  (0, _react.useEffect)(function () {
    return getTotalReviewsCount(productId);
  }, [productId]);
  var listReviews = reviews.map(function (review, index) {
    return /*#__PURE__*/_react["default"].createElement(_Review["default"], {
      key: index.toString(),
      date: review.date,
      title: review.title,
      body: review.body,
      recommended: review.recommended,
      verified: review.verified,
      purchaseType: review.purchase_type,
      ratingOverall: review.rating_overall,
      ratingGraphics: review.rating_graphics,
      ratingGameplay: review.rating_gameplay,
      ratingAppeal: review.rating_appeal,
      name: review.name,
      age: review.age,
      gender: review.gender,
      avatar: review.avatar
    });
  });

  var handleSortChange = function handleSortChange(e) {
    setSortSelected(e.target.innerText);
    setReviewsOffset(0);
  };

  var prevPage = function prevPage() {
    var newOffset = reviewsOffset - REVIEWS_PER_PAGE < 0 ? 0 : reviewsOffset - REVIEWS_PER_PAGE;
    setReviewsOffset(newOffset);
  };

  var nextPage = function nextPage() {
    var atTheEnd = totalReviews - REVIEWS_PER_PAGE < 0 ? 0 : totalReviews - REVIEWS_PER_PAGE;
    var newOffset = reviewsOffset + REVIEWS_PER_PAGE > totalReviews ? atTheEnd : reviewsOffset + REVIEWS_PER_PAGE;
    setReviewsOffset(newOffset);
  };

  var toggleFilters = function toggleFilters() {
    return setShowFilters(!showFilters);
  };

  var nextActive = reviewsOffset + REVIEWS_PER_PAGE < totalReviews;
  var prevActive = !!reviewsOffset;

  var filterButton = /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faBars
  });

  var filters = showFilters && /*#__PURE__*/_react["default"].createElement(_Filters["default"], null);

  var sorts = ['Most Recent', 'Highest to Lowest Rating', 'Lowest to Highest Rating'];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(GlobalStyle, null), /*#__PURE__*/_react["default"].createElement(Grid, null, /*#__PURE__*/_react["default"].createElement(ReviewsTitle, null, "Reviews"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_ButtonRed["default"], {
    buttonText: "Write A Review",
    mouseClick: function mouseClick() {}
  })), /*#__PURE__*/_react["default"].createElement(_RatingSnapshot["default"], null), /*#__PURE__*/_react["default"].createElement(_AverageRatings["default"], null), /*#__PURE__*/_react["default"].createElement(_MostHelpfulReview["default"], {
    productId: productId,
    favorable: true
  }), /*#__PURE__*/_react["default"].createElement(_MostHelpfulReview["default"], {
    productId: productId,
    favorable: false
  }), /*#__PURE__*/_react["default"].createElement(_ReviewPagination["default"], {
    reviewsOffset: reviewsOffset,
    totalReviews: totalReviews,
    reviewsPerPage: REVIEWS_PER_PAGE
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    active: true,
    buttonText: filterButton,
    mouseClick: toggleFilters
  }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
    selectionsArray: sorts,
    handleSortChange: handleSortChange
  })), filters), listReviews, /*#__PURE__*/_react["default"].createElement(Grid, null, /*#__PURE__*/_react["default"].createElement(_ReviewPagination["default"], {
    reviewsOffset: reviewsOffset,
    totalReviews: totalReviews,
    reviewsPerPage: REVIEWS_PER_PAGE
  }), /*#__PURE__*/_react["default"].createElement(_PaginationButtons["default"], {
    nextButton: nextPage,
    prevButton: prevPage,
    nextActive: nextActive,
    prevActive: prevActive
  })));
};

var _default = App;
exports["default"] = _default;