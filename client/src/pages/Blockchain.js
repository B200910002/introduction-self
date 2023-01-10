import React, { Component } from "react";
import { BlockchainContext } from "../context/Context";
import Block from "../components/blockchain/Block";
import Transaction from "../components/blockchain/Transaction";
import axios from "axios";

export default class Blockchain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTransactions: false,
      selectedBlockTransactions: [
        {
          fromAddress: "",
          toAddress: "",
          amount: 0,
          signature: "",
        },
      ],
      blockchain: {
        chain: [
          {
            timestamp: 0,
            transactions: [
              {
                fromAddress: "",
                toAddress: "",
                amount: 0,
                signature: "",
              },
            ],
            previosHash: "",
            hash: "",
            nonce: 0,
          },
        ],
        difficulty: 0,
        pendingTransactions: [
          {
            fromAddress: "",
            toAddress: "",
            amount: 0,
            signature: "",
          },
        ],
        miningReward: 0,
      },
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  // componentDidUpdate() {
  //   this.refreshData();
  // }

  refreshData() {
    axios.get(`http://localhost:9000/api/v1/blockchain/`).then((response) => {
      this.setState({ blockchain: response.data });
    });
  }

  render() {
    const { blockchain, selectedBlockTransactions, showTransactions } =
      this.state;
    let setSelectedBlockTransactions = (selectedBlock) => {
      this.setState({ selectedBlockTransactions: selectedBlock });
    };
    let setShowTransactions = () => {
      this.setState({ showTransactions: true });
    };

    return (
      <BlockchainContext.Provider
        value={{
          blockchain,
          selectedBlockTransactions,
          setShowTransactions,
          setSelectedBlockTransactions,
        }}
      >
        <Block />
        {showTransactions ? <Transaction /> : <></>}
      </BlockchainContext.Provider>
    );
  }
}

// const styles = {};
