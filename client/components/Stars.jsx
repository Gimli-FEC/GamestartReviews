import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingStars = styled.span`

`;

const Stars = ({ ratingOverall }) => {
  const stars = [...Array(ratingOverall).keys()];
  const remainingStars = [...Array(5-ratingOverall).keys()];
  return (
    <RatingStars>
      {stars.map((star) => (
        <svg height="20" width="20" key={star.toString()}>
          <polygon
            points="100,10 40,198 190,78 10,78 160,198"
            transform="scale(.1)"
            style={{ fill: '#da291c', fillRule: 'nonzero' }}
          />
        </svg>
      ))}
      {remainingStars.map((star) => (
        <svg height="20" width="20" key={star.toString()}>
          <polygon
            points="100,10 40,198 190,78 10,78 160,198"
            transform="scale(.1)"
            style={{ fill: 'lightgray', fillRule: 'nonzero' }}
          />
        </svg>
      ))}
    </RatingStars>
  );
};

Stars.propTypes = { ratingOverall: PropTypes.number.isRequired };

export default Stars;
