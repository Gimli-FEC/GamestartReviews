import Review from './components/Review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    var urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams.get('id'));
    const id = urlParams.get('id');
    fetch(`/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
      .then( resp => resp.json())
      .then( data => this.setState({
        reviews: data
      })
      )
      .then(() => console.log(this.state.reviews))
    }

  render() {
    const listReviews = this.state.reviews.map( (review, index) => <Review key={index.toString()} review={review} />);
    return (<div>{listReviews}</div>)
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
