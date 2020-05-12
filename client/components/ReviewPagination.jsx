import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewCount = styled.span`
  font-weight: bold;
  font-size: .9em;
  padding: 20px;
`;

const ReviewPagination = ({ reviewsOffset, totalReviews, reviewsPerPage }) => {
  const start = reviewsOffset + 1;
  const finish = reviewsOffset + reviewsPerPage;
  const reviewsString = `${start}-${finish} of ${totalReviews}`;

  return (
    <ReviewCount>
      {reviewsString}
    </ReviewCount>
  );
};

ReviewPagination.propTypes = {
  reviewsOffset: PropTypes.number.isRequired,
  totalReviews: PropTypes.number.isRequired,
  reviewsPerPage: PropTypes.number.isRequired,
};

export default ReviewPagination;
