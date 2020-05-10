import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonBox = styled.button`
  min-width: 36px;
  height: 32px;
  border: none;
  text-align: center;
  float: right;
  margin: 1px;
  margin-top: 13px;
  background-color: whitesmoke;
  color: lightgray;
  ${({ active }) => active
    && `
    background-color: gainsboro;
    color: black;
    &:hover {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);
    }
  `}
`;

const Button = ({ active, mouseClick, buttonText }) => (
  <ButtonBox active={active} onClick={mouseClick}>{buttonText}</ButtonBox>
);

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  mouseClick: PropTypes.func.isRequired,
  buttonText: PropTypes.node.isRequired,
};

export default Button;
