import React, { Component } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { Colors, Fonts } from "../constants/styles";
import { Images } from "../constants/assets";

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <div style={styles.gridContainer}>
          <div style={styles.gridItem}>
            <Loader />
          </div>
        </div>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link style={styles.a} to="/">
              <p style={Fonts.smallGray}>Home</p>
            </Link>
          </li>
          <li style={styles.li}>
            <Link style={styles.a} to="/blogs">
              <p style={Fonts.smallGray}>Blog</p>
            </Link>
          </li>
          <li style={styles.li}>
            <Link style={styles.a} to="/contact">
              <p style={Fonts.smallGray}>Contact</p>
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "300px auto",
    backgroundImage: `url(${Images.backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  gridItem: {
    padding: "20px",
    textAlign: "center",
  },
  ul: {
    listStyleType: "none",
    margin: 0,
    padding: "0 3%",
    overflow: "hidden",
    backgroundColor: Colors.headerBackColor,
    position: "sticky",
    top: 0,
    fontSize: 14,
  },
  li: {
    float: "left",
  },
  a: {
    display: "block",
    color: Colors.whiteColor,
    textAlign: "center",
    padding: "5px 10px 5px 0",
    textDecoration: "none",
  },
};
