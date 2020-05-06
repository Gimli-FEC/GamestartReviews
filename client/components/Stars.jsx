import React from 'react';
import PropTypes from 'prop-types';

export default function Stars({ ratingOverall }) {
  const stars = [...Array(ratingOverall).keys()];
  return (
    stars.map((star) => (
      <svg height="30" width="20" key={star.toString()}>
        <polygon
          points="100,10 40,198 190,78 10,78 160,198"
          transform="scale(.1)"
          style={{ fill: 'red', fillRule: 'nonzero' }}
        />
      </svg>
    ))
  );
}

Stars.propTypes = { ratingOverall: PropTypes.number.isRequired };
