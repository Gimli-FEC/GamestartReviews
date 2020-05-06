import React, { useState, useEffect } from 'react';
import Review from './Review';

const App = (props) => {
  const [reviews, setReviews] = useState([]);

  const getUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  };

  const getReviewsForId = (id) => {
    fetch(`/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((resp) => resp.json())
      .then((data) => setReviews(data));
  };

  useEffect(() => getReviewsForId(getUrlParams()), []);

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

  return (<div>{listReviews}</div>);
};

export default App;
