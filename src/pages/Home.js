import React from "react";
import Timer from "../components/Timer";
import TodoApp from "../components/Todo";
import { Colors } from "../constants/styles";

function Home() {
  return (
    <div>
      <div style={styles.timer}>
        <Timer />
      </div>
      <div style={styles.toDo}>
        <TodoApp />
      </div>
      <div style={styles.toDo}>
        <TodoApp />
      </div>
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
    color: Colors.whiteColor,
  },
};

export default Home;
