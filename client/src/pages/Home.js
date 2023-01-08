import React from "react";
import Timer from "../components/Timer";
import TodoApp from "../components/Todo";
import { Colors } from "../constants/styles";
import Ap from "../testContext.js/Ap";

function Home() {
  return (
    <div>
      <div style={styles.timer}>
        <Timer />
      </div>
      <div style={styles.toDo}>
        <TodoApp />
      </div>
      <Ap />
    </div>
  );
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

export default Home;
