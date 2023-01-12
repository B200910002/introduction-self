import React, { Component } from "react";
import { Colors, Fonts } from "../../constants/styles";
import { BlockchainContext } from "../../context/BlockchainContext";

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = { blocks: [], block: {} };
  }
  static contextType = BlockchainContext;
  render() {
    const { blockchain, setSelectedBlockTransactions } = this.context;
    return (
      <div style={styles.container}>
        <p style={Fonts.largeGray}>Blocks</p>
        <p style={Fonts.smallGrayItalic}>
          Each card represents a block on the chain. Click on a block to see the
          transactions stored inside.
        </p>
        <div style={styles.gridContainer}>
          {blockchain.chain.map((block) => (
            <div style={styles.block} key={block.hash}>
              <div style={Fonts.smallGray}>
                <p>BLock </p>
                <p>hash: {block.hash}</p>
                <p>previos hash: {block.previosHash}</p>
                <p>nonce: {block.nonce}</p>
                <p>timestamp: {block.timestamp}</p>
                <button
                  onClick={() => {
                    setSelectedBlockTransactions(block.transactions);
                  }}
                >
                  See transactions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {},
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
