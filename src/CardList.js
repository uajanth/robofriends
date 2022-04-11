import React, { Component } from "react";
import { robots } from "./robots";

import Card from "./Card";

class ClassList extends Component {
  render() {
    return robots.map((robot) => (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    ));
  }
}

export default ClassList;
