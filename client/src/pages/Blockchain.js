import React, { Component } from "react";
import { BlockchainContext, BlockchainProvider } from "../context/Context";
import Block from "../components/blockchain/Blocks";
import Transaction from "../components/blockchain/Transactions";
import CreateTransaction from "../components/blockchain/CreateTransaction";
import PendingTransactions from "../components/blockchain/PendingTransactions";

export default class Blockchain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BlockchainProvider>
        <BlockchainChild />
      </BlockchainProvider>
    );
  }
}

class BlockchainChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = BlockchainContext;
  render() {
    const { showTransactions } = this.context;
    return (
      <>
        <CreateTransaction />
        <PendingTransactions />
        <Block />
        {showTransactions ? <Transaction /> : <></>}
      </>
    );
  }
}

// const styles = {};
