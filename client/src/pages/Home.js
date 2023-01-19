import React, { Component } from "react";
import { Colors, Fonts } from "../constants/styles";
import { Images } from "../constants/assets";
import TodoApp from "../components/Todo";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={styles.toDo}>
          <TodoApp />
        </div>
        <div>
          <p style={Fonts.normalGray}>Favorite games</p>
          <div style={styles.gridContainer}>
            <div style={styles.card}>
              <p style={Fonts.smallWhiteBold}>Dota 2</p>
            </div>
            <div style={styles.card}>
              <p style={Fonts.smallWhiteBold}>CS GO</p>
            </div>
            <div style={styles.card}>
              <p style={Fonts.smallWhiteBold}>Chess</p>
            </div>
          </div>
        </div>
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
  gridContainer: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "auto auto auto",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // display: "grid",
    // placeItems: "center",
    backgroundColor: Colors.containerBackColor,
    borderRadius: "10px",
    height: "300px",
    backgroundImage: `url(${Images.backgroundImage})`,
    backgroundSize: "cover",
  },
};
