import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonBox = styled.button`
  min-width: 36px;
  border: none;
  text-align: center;
  padding: 8px;
  float: right;
  margin: 1px;
  margin-top: 5px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #DA291C;
  color: white;
  border-radius: 4px;
  width: fit-content;
  font-size: .7em;
  &:hover {
    background-color: darkred;
  }
`;

const ButtonRed = ({ mouseClick, buttonText }) => (
  <ButtonBox onClick={mouseClick}>{buttonText}</ButtonBox>
);

ButtonRed.propTypes = {
  mouseClick: PropTypes.func.isRequired,
  buttonText: PropTypes.node.isRequired,
};

export default ButtonRed;
