import React, { Component } from "react";
import TodoApp from "../components/Todo";
import { Colors } from "../constants/styles";
import Ap from "../testContextClass/Ap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={styles.toDo}>
          <TodoApp />
        </div>
        <Ap />
      </div>
    );
  }
}

const styles = {
  toDo: {
    padding: "50px",
    margin: "10px 0",
    backgroundColor: Colors.containerBackColor,
    color: Colors.whiteColor,
  },
  timer: {
    textAlign: "right",
  },
};
