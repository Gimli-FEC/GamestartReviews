import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

const ButtonContainer = styled.div`
`;

const PaginationButtons = ({
  prevButton, nextButton, prevActive, nextActive,
}) => {
  const buttonLeft = <FontAwesomeIcon icon={faCaretLeft} size="lg" />;
  const buttonRight = <FontAwesomeIcon icon={faCaretRight} size="lg" />;

  return (
    <ButtonContainer>
      <Button active={nextActive} mouseClick={nextButton} buttonText={buttonRight} />
      <Button active={prevActive} mouseClick={prevButton} buttonText={buttonLeft} />
    </ButtonContainer>
  );
};

PaginationButtons.propTypes = {
  prevButton: PropTypes.func.isRequired,
  nextButton: PropTypes.func.isRequired,
  prevActive: PropTypes.bool.isRequired,
  nextActive: PropTypes.bool.isRequired,
};

export default PaginationButtons;
