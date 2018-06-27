import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = function() {
  return <div>Hello!</div>
}

// Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
//reactDOM takes 2nd argument and that argument is a reference to an existing DOM node on page
