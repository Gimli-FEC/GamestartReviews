import React from 'react';
import Avatar from './Avatar';
import Stars from './Stars';
import PropTypes from 'prop-types';

function Review({
  avatar, name, age, date, title, body, recommended, purchaseType,
  ratingOverall, ratingGraphics, ratingGameplay, ratingAppeal,
}) {
  return (
    <li className="review">
      <Avatar avatar={avatar} />
      <p>
        <Stars ratingOverall={ratingOverall} />
        <span>{name}</span>
        <span>{age}</span>
        <span>{date}</span>
        <span>{title}</span>
        <span>{body}</span>
        <span>{recommended}</span>
        <span>{purchaseType}</span>
        <span>{ratingGraphics}</span>
        <span>{ratingGameplay}</span>
        <span>{ratingAppeal}</span>
      </p>
    </li>
  );
}

Review.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  recommended: PropTypes.number.isRequired,
  purchaseType: PropTypes.number.isRequired,
  ratingOverall: PropTypes.number.isRequired,
  ratingGraphics: PropTypes.number.isRequired,
  ratingGameplay: PropTypes.number.isRequired,
  ratingAppeal: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Review;
