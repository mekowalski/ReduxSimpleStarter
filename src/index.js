import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

//variable to hold API key
const API_KEY = 'AIzaSyCoQ10LAtQjQg1CAjkpIYhE1J_-JrgWVaE';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
