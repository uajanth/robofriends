import React, { Component } from "react";
import "tachyons";

class Card extends Component {
  render() {
    const { name, email, id } = this.props;
    return (
      <div className="bg-light-red  dib br3 pa3 ma2 grow bw2 shadow-5 tc">
        <img
          alt="robot"
          src={`https://robohash.org/${id}?size=200x200`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
