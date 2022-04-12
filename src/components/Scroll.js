import React, { Component } from "react";

class Scroll extends Component {
  render() {
    return <div style={{overflowY:"scroll", border: '3px solid black', height: "100vh"}} >{this.props.children}</div>;
  }
}

export default Scroll;
