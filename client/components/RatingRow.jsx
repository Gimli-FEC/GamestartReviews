import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin: 5px 5px 5px 2px;
  width: 75%;
  span:first-of-type {
    width: 15%;
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

const RatingRow = ({stars, width, total}) => (
  <Row><span>{stars} &#9733;</span><meter value={width}/><span>{total}</span></Row>
);

export default RatingRow;
