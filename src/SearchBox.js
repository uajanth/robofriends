import React, { Component, Fragment } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div className="pa2">
        <input className="pa3 ba b--red bg-lightest-red" type="search" placeholder="search robots" />
      </div>
    );
  }
}

export default SearchBox;
