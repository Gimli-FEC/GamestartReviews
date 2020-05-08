import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingBars = styled.span`

`;

const BarHeading = styled.p`

`;

const Bars = ({ ratingGraphics, ratingGameplay, ratingAppeal }) => {
  const headings = ['Graphics', 'Gameplay', 'Lasting Appeal'];
  const ratings = [ratingGraphics, ratingGameplay, ratingAppeal];
  const allBars = [];
  for (let i = 0; i < 3; i += 1) {
    const bars = [...Array(ratings[i]).keys()];
    const remainingBars = [...Array(5 - ratings[i]).keys()];
    allBars.push(
      <RatingBars key={i.toString()}>
        <BarHeading>{headings[i]}</BarHeading>
        {bars.map((bar, index) => (
          <svg height="8" width="20%" key={index.toString()}>
            <polygon
              points="1,0 99,0 99,8 1,8"
              style={{ fill: 'red' }}
            />
          </svg>
        ))}
        {remainingBars.map((bar, index) => (
          <svg height="8" width="20%" key={index.toString()}>
            <polygon
              points="1,0 99,0 99,8 1,8"
              style={{ fill: 'lightgray' }}
            />
          </svg>
        ))}
      </RatingBars>,
    );
  }
  return (
    <div>
      {allBars}
    </div>
  );
};

Bars.propTypes = {
  ratingGraphics: PropTypes.number.isRequired,
  ratingGameplay: PropTypes.number.isRequired,
  ratingAppeal: PropTypes.number.isRequired,
};

export default Bars;
