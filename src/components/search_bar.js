import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          className="search-box"
          placeholder="Search Wiki..."
          value={this.props.term}
          onChange={event => this.props.onSearchTermChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
