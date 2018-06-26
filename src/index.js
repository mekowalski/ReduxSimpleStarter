import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = function() {
  return <div>Hello!</div>
}

// Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App />);
//make an instance of component then pass it to the ReactDOM.render
//Uncaught Error: Target container is not a DOM element.
