import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Stars from './Stars';
import NameDate from './NameDate';

import API_URL from './api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const Title = styled.p`
  font-size: .9em;
  font-weight: bold;
`;

const ReviewTitle = styled.h2`
  margin: 10px 20px 5px 0;
`;

const Text = styled.p`
  line-height: 1.4em;
  margin: 25px 20px 25px 5px;
`;

const Last = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
`;

const MostHelpfulReview = ({productId, favorable}) => {
  const [ review, setReview ] = useState({name: '', date: '2020-01-01', age: 2, purchase_type: 1, rating_overall: 3});
  
  const getFromApi = (pathString, cb) => {
    fetch(pathString, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((resp) => resp.json())
      .then((data) => cb(data));
  };

  const getMostHelpfulReview = () => {
    if (productId) {
      const order = favorable ? 'DESC' : 'ASC';
      getFromApi(`${API_URL}/${productId}/rating_overall/${order}/0/1`, (data) => setReview(data[0]));
    }
  };

  useEffect(() => getMostHelpfulReview(), [productId]);

  const total = review.helpful_yes + review.helpful_no;
  
  return (
  <Container>
    <Title>Most Helpful {favorable ? 'Favorable' : 'Critical'} Review</Title>
    <div><Stars ratingOverall={review.rating_overall} /></div>
    <div><NameDate name={review.name} date={review.date} age={review.age} purchaseType={review.purchase_type} /></div>
    <ReviewTitle>{review.title}</ReviewTitle>
    <Text>{review.body}</Text>
    <Last><div>{review.helpful_yes} of {total} people found this helpful</div></Last>
  </Container>
  )
}

MostHelpfulReview.propTypes = {
  productId: PropTypes.string.isRequired,
  favorable: PropTypes.bool.isRequired,
};

export default MostHelpfulReview;
