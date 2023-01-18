import React, { createContext, Component } from "react";
import axios from "axios";
import {
  BLOCKCHAIN_BASE_URL,
  BLOCKCHAIN_BALANCE_URL,
  BLOCKCHAIN_BLOCKS_URL,
  BLOCKCHAIN_CREATE_TRANSACTION_URL,
  BLOCKCHAIN_CREATE_BLOCK_URL,
} from "../constants/config";

export const BlockchainContext = createContext({});

export class BlockchainProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      server: false,
      selectedBlock: { index: 0, transactions: [] },
      wallet: {},
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
                timestamp: 0,
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
            timestamp: 0,
          },
        ],
        miningReward: 0,
      },
    };
  }

  componentDidMount = () => {
    this.refreshData();
  };

  componentDidUpdate = () => {
    this.refreshData();
  };

  refreshData = () => {
    try {
      axios.get(BLOCKCHAIN_BASE_URL).then((response) => {
        if (response.status === 200) {
          this.setState({ blockchain: response.data });
          this.setState({ server: true });
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  getAllBlocks = () => {
    try {
      axios.get(BLOCKCHAIN_BLOCKS_URL).then((response) => {
        this.setState({});
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  getBalanceOfAddress = (address) => {
    try {
      axios
        .post(BLOCKCHAIN_BALANCE_URL, {
          address: address,
        })
        .then((response) => {
          this.setState({
            wallet: { address: address, balance: response.data },
          });
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  createTransaction = (newTransaction) => {
    try {
      axios
        .post(BLOCKCHAIN_CREATE_TRANSACTION_URL, {
          fromAddress: newTransaction.fromAddress,
          toAddress: newTransaction.toAddress,
          amount: newTransaction.amount,
        })
        .then((response) => {
          if (response.status === 200) {
            alert(response.data);
          } else alert(response.data);
        });
    } catch (err) {
      console.log(err.massage);
    }
  };

  createBlock = () => {
    try {
      axios.post(BLOCKCHAIN_CREATE_BLOCK_URL).then((response) => {
        if (response.status === 200) alert(response.data);
        else console.log("pezdaa");
      });
    } catch (err) {
      console.log(err.massage);
    }
  };

  render() {
    const { server, blockchain, selectedBlock, wallet } = this.state;
    const { createTransaction, createBlock, getBalanceOfAddress } = this;

    let setSelectedBlock = (index, transactions) => {
      this.setState({
        selectedBlock: {
          index: index,
          transactions: transactions,
        },
      });
    };

    return (
      <BlockchainContext.Provider
        value={{
          server,
          blockchain,
          selectedBlock,
          setSelectedBlock,
          createTransaction,
          createBlock,
          wallet,
          getBalanceOfAddress,
        }}
      >
        {this.props.children}
      </BlockchainContext.Provider>
    );
  }
}