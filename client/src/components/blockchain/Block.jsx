import React, { Component } from "react";
import { Colors } from "../../constants/styles";
import { BlockchainContext } from "../../context/Context";

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = { blocks: [], block: {} };
  }

  static contextType = BlockchainContext;

  render() {
    const { blockchain, setSelectedBlockTransactions, setShowTransactions } =
      this.context;
    return (
      <div style={styles.container}>
        <h1>Blocks</h1>
        <div style={styles.gridContainer}>
          {blockchain.chain.map((block) => (
            <div style={styles.block} key={block.hash}>
              <p>BLock </p>
              <p>hash: {block.hash}</p>
              <p>previos hash: {block.previosHash}</p>
              <p>nonce: {block.nonce}</p>
              <p>timestamp: {block.timestamp}</p>
              <button
                onClick={() => {
                  setShowTransactions();
                  setSelectedBlockTransactions(block.transactions);
                }}
              >
                See transactions
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontSize: "12px",
    color: Colors.grayColor,
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
  },
  block: {
    margin: "10px",
    padding: "10px",
    backgroundColor: Colors.containerBackColor,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};
