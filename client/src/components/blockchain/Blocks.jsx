import React, { Component } from "react";
import { Colors, Fonts } from "../../constants/styles";
import { BlockchainContext } from "../../context/BlockchainContext";

export default class Blocks extends Component {
  static contextType = BlockchainContext;
  render() {
    const { blockchain, setSelectedBlock } = this.context;
    return (
      <div style={styles.container}>
        <p style={Fonts.largeGray}>Blocks on chain</p>
        <p style={Fonts.smallGrayItalic}>
          Each card represents a block on the chain. Click on a block to see the
          transactions stored inside.
        </p>
        <div style={styles.gridContainer}>
          {blockchain.chain.map((block, index) => (
            <div style={styles.block} key={index}>
              <div style={Fonts.smallGray}>
                <p>BLock {index}</p>
                <p>hash: {block.hash}</p>
                <p>previos hash: {block.previosHash}</p>
                <p>nonce: {block.nonce}</p>
                <p>timestamp: {block.timestamp}</p>
                <button
                  onClick={() => {
                    setSelectedBlock(index, block.transactions);
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
    margin: "20px 0",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    gap: "20px",
  },
  block: {
    padding: "10px",
    backgroundColor: Colors.containerBackColor,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderRadius: "10px",
  },
};
