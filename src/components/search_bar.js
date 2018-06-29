import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input //input is now a controlled component
          //creating controlled field/input/form element
          //value changes when the state changes
          value={this.state.term} //this is controlled component
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
