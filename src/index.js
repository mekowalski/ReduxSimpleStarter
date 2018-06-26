//components is a collection of JS functions that produce a view or HTML
// Create a new component. This component should produce some HTML
const App = function() {
  return <div>Hello!</div>
}

// Take this component's generated HTML and put it on the page(DOM)
React.render(App);
//return: Uncaught ReferenceError: React is not defined
