class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch()
  }

  render() {
    return (
      <div>Works!!!</div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
