import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Title = styled.h2`
  margin: 10px 20px 5px 0;
`;

const Text = styled.p`
  line-height: 1.4em;
  margin: 25px 20px 25px 5px;
`;

const Recommended = styled.p`
  margin: 30px 5px;
  font-size: .7em;
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
        <Recommended>
          <FontAwesomeIcon icon={faTimesCircle} />
          <b> No, </b>
          I do not recommend this product.
        </Recommended>
      )}
  </>
);

Body.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  recommended: PropTypes.number.isRequired,
};

export default Body;
