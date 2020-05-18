import React from 'react';
import styled from 'styled-components';
import AverageBars from './AverageBars';
import AverageStars from './AverageStars';

const Container = styled.div`
  margin: 5px;
`;

const Title = styled.p`
  font-size: .9em;
  font-weight: bold;
`;

const AverageRatings = () => {
  const bars = [{name: "Graphics", rating: 3.5}, {name: "Gameplay", rating: 4.2}, {name: "Lasting Appeal", rating: 4.7}];

  return (
    <Container>
      <Title>Average Customer Ratings</Title>
      <AverageStars rating="4.8" />
      {bars.map((bar, index) => <AverageBars key = {index.toString()} name={bar.name} rating={bar.rating} />)}
    </Container>
  )
}

export default AverageRatings;
