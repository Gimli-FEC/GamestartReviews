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

const rows = [{stars:5, total:5}, {stars:4, total:4}, {stars:5, total:3}, {stars:5, total:2}, {stars:5, total:1}]

const RatingSnapshot = () => (
  <Container>
    <Title>Rating Snapshot</Title>
    <p>Select a row below to filter reviews.</p>
    {rows.map((row) => <RatingRow stars={row.stars} total={row.total} />)}
  </Container>
)

export default RatingSnapshot;
