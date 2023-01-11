import { createContext, Component } from "react";
import axios from "axios";

export const BlockchainContext = createContext({});

export class BlockchainProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      server: false,
      selectedBlockTransactions: [],
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

  componentDidMount() {
    this.refreshData();
  }

  componentDidUpdate() {
    this.refreshData();
  }

  refreshData() {
    try {
      axios.get(`http://localhost:9000/api/v1/blockchain/`).then((response) => {
        if (response.status === 200) {
          this.setState({ blockchain: response.data });
          this.setState({ server: true });
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  getAllBlocks() {
    try {
      axios
        .get(`http://localhost:9000/api/v1/blockchain/blocks`)
        .then((response) => {
          this.setState({});
        });
    } catch (err) {
      console.log(err.message);
    }
  }

  getBalanceOfAddress = (address) => {
    try {
      axios
        .post(`http://localhost:9000/api/v1/blockchain/getBalanceOfAddress`, {
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

  createTransaction(newTransaction) {
    try {
      axios
        .post(`http://localhost:9000/api/v1/blockchain/create/transaction`, {
          fromAddress: newTransaction.fromAddress,
          toAddress: newTransaction.toAddress,
          amount: newTransaction.amount,
        })
        .then((response) => {
          if (response.status === 200) alert(response.data);
          else alert(response.data);
        });
    } catch (err) {
      console.log(err.massage);
    }
  }

  createBlock() {
    try {
      axios
        .post(`http://localhost:9000/api/v1/blockchain/create/block`)
        .then((response) => {
          if (response.status === 200) alert(response.data);
          else console.log("pezdaa");
        });
    } catch (err) {
      console.log(err.massage);
    }
  }

  render() {
    const { server, blockchain, selectedBlockTransactions, wallet } =
      this.state;
    const { createTransaction, createBlock, getBalanceOfAddress } = this;

    let setSelectedBlockTransactions = (selectedBlock) => {
      this.setState({ selectedBlockTransactions: selectedBlock });
    };

    return (
      <BlockchainContext.Provider
        value={{
          server,
          blockchain,
          selectedBlockTransactions,
          setSelectedBlockTransactions,
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
