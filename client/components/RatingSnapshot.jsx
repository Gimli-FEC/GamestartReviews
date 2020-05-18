import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RatingRow from './RatingRow';

const Container = styled.div`
  margin: 5px;
`;

const Title = styled.p`
  font-size: .9em;
  font-weight: bold;
`;

const RatingSnapshot = ({
  fiveStars, fourStars, threeStars, twoStars, oneStars,
}) => {
  const overallTotal = fiveStars + fourStars + threeStars + twoStars + oneStars;

  const rows = [
    { stars: 5, total: fiveStars },
    { stars: 4, total: fourStars },
    { stars: 3, total: threeStars },
    { stars: 2, total: twoStars },
    { stars: 1, total: oneStars }];

  rows.forEach((row) => {
    // eslint-disable-next-line no-param-reassign
    row.width = (row.total / overallTotal).toString();
  });

  return (
    <Container>
      <Title>Rating Snapshot</Title>
      <p>Select a row below to filter reviews.</p>
      {rows.map((row, index) => (
        <RatingRow
          key={index.toString()}
          stars={row.stars}
          width={row.width}
          total={row.total}
        />
      ))}
    </Container>
  );
};

RatingSnapshot.propTypes = {
  fiveStars: PropTypes.number.isRequired,
  fourStars: PropTypes.number.isRequired,
  threeStars: PropTypes.number.isRequired,
  twoStars: PropTypes.number.isRequired,
  oneStars: PropTypes.number.isRequired,
};

export default RatingSnapshot;
