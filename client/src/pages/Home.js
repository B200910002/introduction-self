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
          <p style={Fonts.largeGray}>Favorite games</p>
          <div style={styles.gridContainer}>
            <div style={styles.img1}>
              <div style={styles.card}>
                <p style={Fonts.smallWhiteBold}>Dota 2</p>
              </div>
            </div>
            <div style={styles.img2}>
              <div style={styles.card}>
                <p style={Fonts.smallWhiteBold}>CS GO</p>
              </div>
            </div>
            <div style={styles.img3}>
              <div style={styles.card}>
                <p style={Fonts.smallWhiteBold}>Chess</p>
              </div>
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
    margin: "20px 0",
    backgroundColor: Colors.containerBackColor,
    color: Colors.whiteColor,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  timer: {
    textAlign: "right",
  },
  gridContainer: {
    margin: "20px 0",
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
    height: "300px",
    borderRadius: "10px",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  img1: {
    backgroundImage: `url(${Images.dota2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  },
  img2: {
    backgroundImage: `url(${Images.csgo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  },
  img3: {
    backgroundImage: `url(${Images.chess})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  },
};
