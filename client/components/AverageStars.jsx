import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin: 15px 5px 5px 2px;
  width: 75%;
  span:first-of-type {
    width: 45%;
  }
  meter {
    width: 100%;
    height: 10px;
    margin: auto;
  }
  meter::-webkit-meter-optimum-value {
    background: #da291c;
  }
  span:nth-of-type(2) {
    width: 100px;
    text-align: center;
  }
`;

const AverageStars = ({rating}) => {
  const width = rating/5 * 100;
  return (
    <Row><span>Overall</span><meter value={width}/><span>{rating}</span></Row>
  );
}

export default AverageStars;
