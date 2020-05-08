import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Review from './Review';

const SortSelect = styled.div`
  float: right;
  margin: 20px;
`;

const App = (props) => {
  const [reviews, setReviews] = useState([]);
  const [sortSelected, setSortSelected] = useState('Most Recent');
  const [productId, setProductId] = useState();

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
      fetch(`/${productId}/${sort}/${order}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((resp) => resp.json())
        .then((data) => setReviews(data));
    }
  };

  useEffect(() => {
    getReviewsForId(getUrlParams());
  }, [productId, sortSelected]);

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

  const handleSortChange = (e) => setSortSelected(e.target.value);

  return (
    <div>
      <SortSelect>
        <span>Sort by: </span>
        <select value={sortSelected} onChange={handleSortChange}>
          <option value="Most Recent">Most Recent</option>
          <option value="Highest to Lowest Rating">Highest to Lowest Rating</option>
          <option value="Lowest to Highest Rating">Lowest to Highest Rating</option>
        </select>
      </SortSelect>
      {listReviews}
    </div>
  );
};

export default App;
