import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCoQ10LAtQjQg1CAjkpIYhE1J_-JrgWVaE';

// Create a new component. This component should produce some HTML
// refactor from functional component to class-based component to utilize state and data persist
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
      //this.setState({ videos: videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
