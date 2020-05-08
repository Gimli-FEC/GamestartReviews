import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Stars from './Stars';
import NameDate from './NameDate';
import Body from './Body';
import Bars from './Bars';
import styled from 'styled-components';

const ReviewGrid = styled.li`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
`;

function Review({
  avatar, name, age, date, title, body, recommended, purchaseType,
  ratingOverall, ratingGraphics, ratingGameplay, ratingAppeal,
}) {
  return (
    <ReviewGrid>
      <Avatar avatar={avatar} />
      <div>
        <Stars ratingOverall={ratingOverall} />
        <NameDate name={name} date={date} age={age} purchaseType={purchaseType} />
        <Body title={title} body={body} recommended={recommended} />
      </div>
      <Bars
        ratingGraphics={ratingGraphics}
        ratingGameplay={ratingGameplay}
        ratingAppeal={ratingAppeal}
      />
    </ReviewGrid>
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
