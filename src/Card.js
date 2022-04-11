import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img src="" alt=""/>
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Card;
