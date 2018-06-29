import React, { Component } from 'react';

class SearchBar extends Component {
  //define state, only class-based comps have state
  //constructor is the 1st & only function called automatically whenever a new class instance is created
  constructor(props) {
    //passes on parent method via super
    super(props);

    this.state = { term: '' };
  }

  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
