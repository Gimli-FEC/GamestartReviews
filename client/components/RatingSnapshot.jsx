import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 5px;
`;

const Title = styled.p`
  font-size: .9em;
  font-weight: bold;
`;

const RatingSnapshot = () => (
  <Container>
    <Title>Rating Snapshot</Title>
  </Container>
)

export default RatingSnapshot;
