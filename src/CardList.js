import React, { Component } from "react";

import Card from "./Card";

class ClassList extends Component {
  render() {
    const robots = this.props.robots;
    const cardArray = robots.map((robot) => {
      return (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      );
    });

    return <div>{cardArray}</div>;
  }
}

export default ClassList;
