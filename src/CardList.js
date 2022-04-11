import React, { Component } from "react";
import { robots } from "./robots";

import Card from "./Card";

class ClassList extends Component {
  render() {
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
