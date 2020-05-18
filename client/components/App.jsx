import React, { useState, useEffect } from 'react';
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

const App = (props) => {
  const REVIEWS_PER_PAGE = 5;

  const [reviews, setReviews] = useState([]);
  const [sortSelected, setSortSelected] = useState('Most Recent');
  const [productId, setProductId] = useState('3');
  const [reviewsOffset, setReviewsOffset] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [totalReviews, setTotalReviews] = useState(0);
  const [fiveStars, setFiveStars] = useState(0);
  const [fourStars, setFourStars] = useState(0);
  const [threeStars, setThreeStars] = useState(0);
  const [twoStars, setTwoStars] = useState(0);
  const [oneStars, setOneStars] = useState(0);



  const getUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setProductId(id);
    return id;
  };

  const getFromApi = (pathString, cb) => {
    fetch(pathString, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((resp) => resp.json())
      .then((data) => cb(data));
  };

  const getReviewsForId = () => {
    if (productId) {
      const sort = (sortSelected === 'Most Recent') ? 'date' : 'rating_overall';
      const order = (sortSelected === 'Lowest to Highest Rating') ? 'ASC' : 'DESC';
      getFromApi(`${API_URL}/${productId}/${sort}/${order}/${reviewsOffset}/${REVIEWS_PER_PAGE}`, setReviews);
    }
  };

  const pullTotalFromJson = (data) => {
    setTotalReviews(data[0]['count(*)']);
  };

  const getTotalReviewsCount = () => {
    if (productId) {
      getFromApi(`${API_URL}/count/${productId}`, pullTotalFromJson);
    }
  };

  const pullFiveStarsFromJson = (data) => {
    setFiveStars(data[0]['count(*)']);
  };

  const getFiveStarsCount = () => {
    if (productId) {
      getFromApi(`${API_URL}/count/${productId}/5`, pullFiveStarsFromJson);
    }
  };

  useEffect(() => getFiveStarsCount(productId), [productId]);

  const pullFourStarsFromJson = (data) => {
    setFourStars(data[0]['count(*)']);
  };

  const getFourStarsCount = () => {
    if (productId) {
      getFromApi(`${API_URL}/count/${productId}/4`, pullFourStarsFromJson);
    }
  };

  useEffect(() => getFourStarsCount(productId), [productId]);

  const pullThreeStarsFromJson = (data) => {
    setThreeStars(data[0]['count(*)']);
  };

  const getThreeStarsCount = () => {
    if (productId) {
      getFromApi(`${API_URL}/count/${productId}/3`, pullThreeStarsFromJson);
    }
  };

  useEffect(() => getThreeStarsCount(productId), [productId]);

  const pullTwoStarsFromJson = (data) => {
    setTwoStars(data[0]['count(*)']);
  };

  const getTwoStarsCount = () => {
    if (productId) {
      getFromApi(`${API_URL}/count/${productId}/2`, pullTwoStarsFromJson);
    }
  };

  useEffect(() => getTwoStarsCount(productId), [productId]);

  const pullOneStarsFromJson = (data) => {
    setOneStars(data[0]['count(*)']);
  };

  const getOneStarsCount = () => {
    if (productId) {
      getFromApi(`${API_URL}/count/${productId}/1`, pullOneStarsFromJson);
    }
  };

  useEffect(() => getOneStarsCount(productId), [productId]);

  useEffect(() => {
    getReviewsForId(getUrlParams());
  }, [productId, sortSelected, reviewsOffset]);

  useEffect(() => getTotalReviewsCount(productId), [productId]);

  const listReviews = reviews.map(
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
    ),
  );

  const handleSortChange = (e) => {
    setSortSelected(e.target.innerText);
    setReviewsOffset(0);
  };

  const prevPage = () => {
    const newOffset = reviewsOffset - REVIEWS_PER_PAGE < 0 ? 0 : reviewsOffset - REVIEWS_PER_PAGE;
    setReviewsOffset(newOffset);
  };

  const nextPage = () => {
    const atTheEnd = totalReviews - REVIEWS_PER_PAGE < 0 ? 0 : totalReviews - REVIEWS_PER_PAGE
    const newOffset = reviewsOffset + REVIEWS_PER_PAGE > totalReviews ? atTheEnd : reviewsOffset + REVIEWS_PER_PAGE;
    setReviewsOffset(newOffset);
  };

  const toggleFilters = () => setShowFilters(!showFilters);

  const nextActive = reviewsOffset + REVIEWS_PER_PAGE < totalReviews;
  const prevActive = !!reviewsOffset;
  const filterButton = <FontAwesomeIcon icon={faBars} />;
  const filters = showFilters && <Filters />;
  const sorts = ['Most Recent', 'Highest to Lowest Rating', 'Lowest to Highest Rating'];

  return (
    <div>
      <GlobalStyle />
      <Grid>
        <ReviewsTitle>Reviews</ReviewsTitle>
        <div><ButtonRed buttonText="Write A Review" mouseClick={()=>{}} /></div>
        <RatingSnapshot fiveStars={fiveStars} fourStars={fourStars} threeStars={threeStars} twoStars={twoStars} oneStars={oneStars} />
        <AverageRatings />
        <MostHelpfulReview productId={productId} favorable />
        <MostHelpfulReview productId={productId} favorable={false} />
        <ReviewPagination reviewsOffset={reviewsOffset} totalReviews={totalReviews} reviewsPerPage={REVIEWS_PER_PAGE} />
        <div>
          <Button active buttonText={filterButton} mouseClick={toggleFilters} />
          <DropDown selectionsArray={sorts} handleSortChange={handleSortChange} />
        </div>
        {filters}
      </Grid>
      {listReviews}
      <Grid>
        <ReviewPagination reviewsOffset={reviewsOffset} totalReviews={totalReviews} reviewsPerPage={REVIEWS_PER_PAGE} />
        <PaginationButtons nextButton={nextPage} prevButton={prevPage} nextActive={nextActive} prevActive={prevActive} />
      </Grid>
    </div>
  );
};

export default App;
