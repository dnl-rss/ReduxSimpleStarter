import React, { Component } from 'react';

// Class Component
class SearchBar extends React.Component {

  // intialize class state:
  // if "search_term" changes, the state changes and re-renders
  // ONLY manipulate state manually inside the constructor
  // otherwise use .setState
  // must bind event handler
  constructor(props) {
    super(props);
    this.state = { search_term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  // a class compoment must call render() upon state changes
  // render() must return JSX
  // best practice is to set state, then update input (state-controlled component)
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.search_term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // event handler: logs changes in the search bar input and updates state
  onInputChange(term) {
    this.setState({term});
    this.props.onSearch(term); // callback
  }

};

export default SearchBar; // must export component
