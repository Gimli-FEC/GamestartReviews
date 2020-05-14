import React from 'react';
import styled from 'styled-components';
import RatingRow from './RatingRow';

const Container = styled.div`
  margin: 5px;
`;

const Title = styled.p`
  font-size: .9em;
  font-weight: bold;
`;

const RatingSnapshot = ({ rows }) => {
  rows = [{stars:5, total:435}, {stars:4, total:115}, {stars:3, total:55}, {stars:2, total:18}, {stars:1, total:33}];

  const overallTotal = rows.reduce((sum, row) => sum + row.total, 0);

  rows.forEach((row) => {
    row.width = (row.total/overallTotal).toString();
  });

  return (
    <Container>
      <Title>Rating Snapshot</Title>
      <p>Select a row below to filter reviews.</p>
      {rows.map((row, index) => <RatingRow key = {index.toString()} stars={row.stars} width={row.width} total={row.total}/>)}
    </Container>
  )
}

export default RatingSnapshot;
