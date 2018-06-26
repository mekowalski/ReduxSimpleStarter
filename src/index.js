//get react and give me access
import React from 'react';

// Create a new component. This component should produce some HTML
const App = function() {
  return <div>Hello!</div>
}

// Take this component's generated HTML and put it on the page(DOM)
React.render(App);
//Uncaught TypeError: _react2.default.render is not a function
