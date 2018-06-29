import React from 'react';

//Functional component: 1 function, some info goes in and JSX comes out
// const SearchBar = () => {
  // return <input />;
// }

//Class component has some type of internal record keeping, to be aware of itself since it's been rendered
//Create class-based component with ES6
class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}

export default SearchBar;
