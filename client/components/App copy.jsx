import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Review from './Review';
import DropDown from './DropDown';
import ReviewPagination from './ReviewPagination';
import PaginationButtons from './PaginationButtons';
import Button from './Button';

import ButtonRed from './ButtonRed';
import Filters from './Filters';
import RatingSnapshot from './RatingSnapshot';
import AverageRatings from './AverageRatings';
import MostHelpfulReview from './MostHelpfulReview';

import API_URL from './api';
 
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.2;
    padding: 80px 0;
    max-width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
  }
`;
 
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 20px;
`;

const ReviewsTitle = styled.div`
  text-transform: uppercase;
  font-size: xx-large;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      sortSelected: 'Most Recent',
      productId: '',
      reviewsOffset: 0,
      reviewsPerPage: 5,
      showFilters: false,
      totalReviews: 0,
      starCounts: [],
    }
  }

  getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    this.setState({ productId: id });
    return id;
  };

  getFromApi(pathString, cb) {
    fetch(API_URL + pathString, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((resp) => resp.json())
      .then((data) => cb(data));
  };

  setReviews(data) {
    this.setState({
      reviews: data,
    });
  }

  getReviewsForId() {
    if (this.state.productId) {
      const sort = (this.state.sortSelected === 'Most Recent') ? 'date' : 'rating_overall';
      const order = (this.state.sortSelected === 'Lowest to Highest Rating') ? 'ASC' : 'DESC';
      this.getFromApi(`/${this.state.productId}/${sort}/${order}/${this.state.reviewsOffset}/${this.state.reviewsPerPage}`, this.setReviews);
    }
  };

  pullTotalFromJson(data) {
    this.setState({
      totalReviews: data[0]['count(*)']
    });
  };

  getTotalReviewsCount() {
    if (this.state.productId) {
      getFromApi(`/count/${this.state.productId}`, this.pullTotalFromJson);
    }
  };

  componentDidMount() {
    this.getReviewsForId(this.getUrlParams());
    this.getTotalReviewsCount(this.state.productId);
  }

  handleSortChange(e) {
    this.setState({
      sortSelected: e.target.innerText,
      reviewsOffset: 0,
    });
  }

  prevPage() {
    const newOffset = this.state.reviewsOffset - this.state.reviewsPerPage < 0 ? 0 : this.state.reviewsOffset - this.state.reviewsPerPage;
    this.setState({
      reviewsOffset: newOffset
    });
  };

  nextPage() {
    const atTheEnd = this.state.totalReviews - this.state.reviewsPerPage < 0 ? 0 : this.state.totalReviews - this.state.reviewsPerPage;
    const newOffset = this.state.reviewsOffset + this.state.reviewsPerPage > this.state.totalReviews ? atTheEnd : this.state.reviewsOffset + this.state.reviewsPerPage;
    this.setState({
      reviewsOffset: newOffset
    })
  };

  toggleFilters() {
    this.setState({
      showFilters: !this.state.showFilters
    });
  }

  render() {
    const nextActive = this.state.reviewsOffset + this.state.reviewsPerPage < this.state.totalReviews;
    const prevActive = !!this.state.reviewsOffset;
    const filterButton = <FontAwesomeIcon icon={faBars} />;
    const filters = this.state.showFilters && <Filters />;
    const sorts = ['Most Recent', 'Highest to Lowest Rating', 'Lowest to Highest Rating'];

  return (
    <div>
      <GlobalStyle />
      <Grid>
        <ReviewsTitle>Reviews</ReviewsTitle>
        <div><ButtonRed buttonText="Write A Review" mouseClick={()=>{}} /></div>
        <RatingSnapshot  />
        <AverageRatings />
        <MostHelpfulReview productId={this.state.productId} favorable />
        <MostHelpfulReview productId={this.state.productId} favorable={false} />
        <ReviewPagination reviewsOffset={this.state.reviewsOffset} totalReviews={this.state.totalReviews} reviewsPerPage={this.state.reviewsPerPage} />
        <div>
          <Button active buttonText={filterButton} mouseClick={() => this.toggleFilters} />
          <DropDown selectionsArray={sorts} handleSortChange={() => this.handleSortChange} />
        </div>
        {filters}
      </Grid>
      {this.state.reviews.map(
      (review, index) => (
        <Review
          key={index.toString()}
          date={review.date}
          title={review.title}
          body={review.body}
          recommended={review.recommended}
          verified={review.verified}
          purchaseType={review.purchase_type}
          ratingOverall={review.rating_overall}
          ratingGraphics={review.rating_graphics}
          ratingGameplay={review.rating_gameplay}
          ratingAppeal={review.rating_appeal}
          name={review.name}
          age={review.age}
          gender={review.gender}
          avatar={review.avatar}
        />
      ))}
      <Grid>
        <ReviewPagination reviewsOffset={this.state.reviewsOffset} totalReviews={this.state.totalReviews} reviewsPerPage={this.state.reviewsPerPage} />
        <PaginationButtons nextButton={() => this.nextPage} prevButton={() => this.prevPage} nextActive={nextActive} prevActive={prevActive} />
      </Grid>
    </div>
    );
  }
};

export default App;
