import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h2`
`;

const Text = styled.p`
`;

const Body = ({ title, body, recommended }) => (
  <>
    <Title>{title}</Title>
    <Text>{body}</Text>
    { recommended
      ? (
        <p>
          <FontAwesomeIcon icon={faCheckCircle} />
          <b> Yes, </b>
          I recommend this product.
        </p>
      )
      : (
        <p>
          <FontAwesomeIcon icon={faTimesCircle} />
          <b> No, </b>
          I do not recommend this product.
        </p>
      )}
  </>
);

Body.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  recommended: PropTypes.number.isRequired,
};

export default Body;
