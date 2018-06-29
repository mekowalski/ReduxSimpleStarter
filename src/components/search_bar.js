import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //the beginning of state in constructor
    this.state = { term: '' };
  }

  //now manipulating/updating the state
  //always manipulate state with this.setState
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
