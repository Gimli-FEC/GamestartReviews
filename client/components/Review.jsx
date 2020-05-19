import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import API_URL from './api';

// import Avatar from './Avatar';
import Stars from './Stars';
import NameDate from './NameDate';
import Body from './Body';
import Bars from './Bars';

const ReviewGrid = styled.li`
  display: grid;
  grid-template-columns: 1fr 13fr 5fr;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
  border-top: 1px lightgray solid;
  padding: 20px;
  clear: both;
`;

const RightColumn = styled.div`
  font-size: 1em;
  text-align: right;
  span span:nth-child(1) {
    color: #da291c;
  }
  span span:nth-child(2) {
    margin-left: 5px;
    font-weight: 400;
  }
`;

const Review = ({
  gender, name, age, date, title, body, recommended, verified, purchaseType,
  ratingOverall, ratingGraphics, ratingGameplay, ratingAppeal,
}) => {
  const verifiedText = verified
    ? (
      <span>
        <span><FontAwesomeIcon icon={faStar} /></span>
        <span>Verified Purchaser</span>
      </span>
    )
    : null;
  const avatarPic = gender ? <img src="https://gamestart-images.s3.amazonaws.com/female-avatar-small.png" alt="Female Avatar" /> : <img src="https://gamestart-images.s3.amazonaws.com/male-avatar-small.png" alt="Male Avatar" />;
  return (
    <ReviewGrid>
      {avatarPic}
      <div>
        <Stars ratingOverall={ratingOverall} />
        <NameDate name={name} date={date} age={age} purchaseType={purchaseType} />
        <Body title={title} body={body} recommended={recommended} />
      </div>
      <RightColumn>
        {verifiedText}
        <Bars
          ratingGraphics={ratingGraphics}
          ratingGameplay={ratingGameplay}
          ratingAppeal={ratingAppeal}
        />
      </RightColumn>
    </ReviewGrid>
  );
};

Review.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  recommended: PropTypes.number.isRequired,
  verified: PropTypes.number.isRequired,
  purchaseType: PropTypes.number.isRequired,
  ratingOverall: PropTypes.number.isRequired,
  ratingGraphics: PropTypes.number.isRequired,
  ratingGameplay: PropTypes.number.isRequired,
  ratingAppeal: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.number.isRequired,
  // avatar: PropTypes.string.isRequired,
};

export default Review;
