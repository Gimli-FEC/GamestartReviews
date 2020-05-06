import React from 'react';
import Review from './Review';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    fetch(`/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((resp) => resp.json())
      .then((data) => this.setState({
        reviews: data,
      }));
  }

  render() {
    const { reviews } = this.state;
    const listReviews = reviews.map(
      (review, index) => (
        <Review
          key={index.toString()}
          date={review.date}
          title={review.title}
          body={review.body}
          recommended={review.recommended}
          purchaseType={review.purchase_type}
          ratingOverall={review.rating_overall}
          ratingGraphics={review.rating_graphics}
          ratingGameplay={review.rating_gameplay}
          ratingAppeal={review.rating_appeal}
          name={review.name}
          age={review.age}
          avatar={review.avatar}
        />
      ),
    );
    return (<div>{listReviews}</div>);
  }
}
