import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Review from './Review';
import DropDown from './DropDown';
import ReviewPagination from './ReviewPagination';
import PaginationButtons from './PaginationButtons';
import Button from './Button';
import Filters from './Filters';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 20px;
`;

const App = (props) => {
  const REVIEWS_PER_PAGE = 5;
  const totalReviews = 1000;

  const [reviews, setReviews] = useState([]);
  const [sortSelected, setSortSelected] = useState('Most Recent');
  const [productId, setProductId] = useState();
  const [reviewsOffset, setReviewsOffset] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const getUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setProductId(id);
    return id;
  };

  const getReviewsForId = () => {
    if (productId) {
      const sort = (sortSelected === 'Most Recent') ? 'date' : 'rating_overall';
      const order = (sortSelected === 'Lowest to Highest Rating') ? 'ASC' : 'DESC';
      fetch(`/${productId}/${sort}/${order}/${reviewsOffset}/${REVIEWS_PER_PAGE}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((resp) => resp.json())
        .then((data) => setReviews(data));
    }
  };

  useEffect(() => {
    getReviewsForId(getUrlParams());
  }, [productId, sortSelected, reviewsOffset]);

  const listReviews = reviews.map(
    (review, index) => (
      <Review
        key={index.toString()}
        date={review.date}
        title={review.title}
        body={review.body}
        recommended={review.recommended}
        purchaseType={review.purchase_type}
        ratingOverall={review.rating_overall}
        ratingGraphics={review.rating_graphics}
        ratingGameplay={review.rating_gameplay}
        ratingAppeal={review.rating_appeal}
        name={review.name}
        age={review.age}
        avatar={review.avatar}
      />
    ),
  );

  const handleSortChange = (e) => setSortSelected(e.target.innerText);

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

  return (
    <div>
      <Grid>
        <ReviewPagination reviewsOffset={reviewsOffset} totalReviews={totalReviews} reviewsPerPage={REVIEWS_PER_PAGE} />
        <div>
          <Button active buttonText={filterButton} mouseClick={toggleFilters} />
          <DropDown handleSortChange={handleSortChange} />
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
