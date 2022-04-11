import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList />
      </div>
    );
  }
}

export default App;
