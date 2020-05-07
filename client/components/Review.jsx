import React from 'react';
import Avatar from './Avatar';
import Stars from './Stars';
import PropTypes from 'prop-types';
import NameDate from './NameDate';
import Body from './Body';

function Review({
  avatar, name, age, date, title, body, recommended, purchaseType,
  ratingOverall, ratingGraphics, ratingGameplay, ratingAppeal,
}) {
  return (
    <li className="review">
      <Avatar avatar={avatar} />
      <div>
        <Stars ratingOverall={ratingOverall} />
        <NameDate name={name} age={age} date={date} />
        <Body title={title} body={body} recommended={recommended} />
        <span>{purchaseType}</span>
        <span>{ratingGraphics}</span>
        <span>{ratingGameplay}</span>
        <span>{ratingAppeal}</span>
      </div>
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
