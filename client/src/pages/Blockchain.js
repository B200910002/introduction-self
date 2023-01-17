import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fonts } from "../constants/styles";
import { BlockchainContext } from "../context/BlockchainContext";

export default class Blockchain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = BlockchainContext;
  render() {
    const { server } = this.context;
    return (
      <>
        {server ? (
          <div style={Fonts.normalGrayItalic}>
            <Link to="/blockchain" style={styles.link}>blockchain</Link>
            <Link to="createTransaction" style={styles.link}>create Transaction</Link>
            <Link to="pendingTransactions" style={styles.link}>pending Transactions</Link>
          </div>
        ) : (
          <>
            <p style={Fonts.normalGray}>Block chain server has turn off!</p>
          </>
        )}
      </>
    );
  }
}

const styles = {
  link: {
    marginRight: "50px",
  },
};
