import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { Fonts } from "../constants/styles";
import { BlockchainContext, BlockchainProvider } from "../context/BlockchainContext";

export default class Blockchain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BlockchainProvider>
        <BlockchainConsumer />
      </BlockchainProvider>
    );
  }
}

class BlockchainConsumer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BlockchainContext.Consumer>
        {(context) => context.server ? (
          <>
            <div style={Fonts.normalGrayItalic}>
              <Link to="/blockchain" style={styles.link}>blockchain</Link>
              <Link to="createTransaction" style={styles.link}>create Transaction</Link>
              <Link to="pendingTransactions" style={styles.link}>pending Transactions</Link>
            </div>
            <Outlet />
          </>
        ) : (
          <>
            <p style={Fonts.normalGray}>Block chain server has turn off!</p>
          </>
        )}
      </BlockchainContext.Consumer>
    );
  }
}

const styles = {
  link: {
    marginRight: "50px",
  },
};
