import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div className="pa2">
        <input
          onChange={this.props.searchChange}
          className="pa3 ba b--blue bg-lightest-blue"
          type="search"
          placeholder="search robots"
        />
      </div>
    );
  }
}

export default SearchBox;
