"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  body {\n    font-family: Arial, Helvetica, sans-serif;\n    line-height: 1.2;\n    padding: 80px 0;\n    max-width: 1280px;\n    margin: 0 auto;\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var Grid = _styledComponents["default"].div.withConfig({
  displayName: "Appcopy__Grid",
  componentId: "i2y22-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;padding:20px;"]);

var ReviewsTitle = _styledComponents["default"].div.withConfig({
  displayName: "Appcopy__ReviewsTitle",
  componentId: "i2y22-1"
})(["text-transform:uppercase;font-size:xx-large;"]);

var App = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = _super.call(this, props);
    _this.state = {
      reviews: [],
      sortSelected: 'Most Recent',
      productId: '',
      reviewsOffset: 0,
      reviewsPerPage: 5,
      showFilters: false,
      totalReviews: 0,
      starCounts: []
    };
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "getUrlParams",
    value: function getUrlParams() {
      var urlParams = new URLSearchParams(window.location.search);
      var id = urlParams.get('id');
      this.setState({
        productId: id
      });
      return id;
    }
  }, {
    key: "getFromApi",
    value: function getFromApi(pathString, cb) {
      fetch(_api["default"] + pathString, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        return cb(data);
      });
    }
  }, {
    key: "setReviews",
    value: function setReviews(data) {
      this.setState({
        reviews: data
      });
    }
  }, {
    key: "getReviewsForId",
    value: function getReviewsForId() {
      if (this.state.productId) {
        var sort = this.state.sortSelected === 'Most Recent' ? 'date' : 'rating_overall';
        var order = this.state.sortSelected === 'Lowest to Highest Rating' ? 'ASC' : 'DESC';
        this.getFromApi("/".concat(this.state.productId, "/").concat(sort, "/").concat(order, "/").concat(this.state.reviewsOffset, "/").concat(this.state.reviewsPerPage), this.setReviews);
      }
    }
  }, {
    key: "pullTotalFromJson",
    value: function pullTotalFromJson(data) {
      this.setState({
        totalReviews: data[0]['count(*)']
      });
    }
  }, {
    key: "getTotalReviewsCount",
    value: function getTotalReviewsCount() {
      if (this.state.productId) {
        getFromApi("/count/".concat(this.state.productId), this.pullTotalFromJson);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getReviewsForId(this.getUrlParams());
      this.getTotalReviewsCount(this.state.productId);
    }
  }, {
    key: "handleSortChange",
    value: function handleSortChange(e) {
      this.setState({
        sortSelected: e.target.innerText,
        reviewsOffset: 0
      });
    }
  }, {
    key: "prevPage",
    value: function prevPage() {
      var newOffset = this.state.reviewsOffset - this.state.reviewsPerPage < 0 ? 0 : this.state.reviewsOffset - this.state.reviewsPerPage;
      this.setState({
        reviewsOffset: newOffset
      });
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      var atTheEnd = this.state.totalReviews - this.state.reviewsPerPage < 0 ? 0 : this.state.totalReviews - this.state.reviewsPerPage;
      var newOffset = this.state.reviewsOffset + this.state.reviewsPerPage > this.state.totalReviews ? atTheEnd : this.state.reviewsOffset + this.state.reviewsPerPage;
      this.setState({
        reviewsOffset: newOffset
      });
    }
  }, {
    key: "toggleFilters",
    value: function toggleFilters() {
      this.setState({
        showFilters: !this.state.showFilters
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var nextActive = this.state.reviewsOffset + this.state.reviewsPerPage < this.state.totalReviews;
      var prevActive = !!this.state.reviewsOffset;

      var filterButton = /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faBars
      });

      var filters = this.state.showFilters && /*#__PURE__*/_react["default"].createElement(_Filters["default"], null);

      var sorts = ['Most Recent', 'Highest to Lowest Rating', 'Lowest to Highest Rating'];
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(GlobalStyle, null), /*#__PURE__*/_react["default"].createElement(Grid, null, /*#__PURE__*/_react["default"].createElement(ReviewsTitle, null, "Reviews"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_ButtonRed["default"], {
        buttonText: "Write A Review",
        mouseClick: function mouseClick() {}
      })), /*#__PURE__*/_react["default"].createElement(_RatingSnapshot["default"], null), /*#__PURE__*/_react["default"].createElement(_AverageRatings["default"], null), /*#__PURE__*/_react["default"].createElement(_MostHelpfulReview["default"], {
        productId: this.state.productId,
        favorable: true
      }), /*#__PURE__*/_react["default"].createElement(_MostHelpfulReview["default"], {
        productId: this.state.productId,
        favorable: false
      }), /*#__PURE__*/_react["default"].createElement(_ReviewPagination["default"], {
        reviewsOffset: this.state.reviewsOffset,
        totalReviews: this.state.totalReviews,
        reviewsPerPage: this.state.reviewsPerPage
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        active: true,
        buttonText: filterButton,
        mouseClick: function mouseClick() {
          return _this2.toggleFilters;
        }
      }), /*#__PURE__*/_react["default"].createElement(_DropDown["default"], {
        selectionsArray: sorts,
        handleSortChange: function handleSortChange() {
          return _this2.handleSortChange;
        }
      })), filters), this.state.reviews.map(function (review, index) {
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
      }), /*#__PURE__*/_react["default"].createElement(Grid, null, /*#__PURE__*/_react["default"].createElement(_ReviewPagination["default"], {
        reviewsOffset: this.state.reviewsOffset,
        totalReviews: this.state.totalReviews,
        reviewsPerPage: this.state.reviewsPerPage
      }), /*#__PURE__*/_react["default"].createElement(_PaginationButtons["default"], {
        nextButton: function nextButton() {
          return _this2.nextPage;
        },
        prevButton: function prevButton() {
          return _this2.prevPage;
        },
        nextActive: nextActive,
        prevActive: prevActive
      })));
    }
  }]);
  return App;
}(_react["default"].Component);

;
var _default = App;
exports["default"] = _default;