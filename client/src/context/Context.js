import { createContext, Component } from "react";
import axios from "axios";

export const BlockchainContext = createContext({});

export class BlockchainProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTransactions: false,
      selectedBlockTransactions: [],
      balanceOfAddress: 0,
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
    this.getBlockChain();
  }

  getBlockChain() {
    try {
      axios.get(`http://localhost:9000/api/v1/blockchain/`).then((response) => {
        this.setState({ blockchain: response.data });
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

  getBalanceOfAddress(address) {
    try {
      axios
        .post(`http://localhost:9000/api/v1/blockchain/getBalanceOfAddress`, {
          address: address,
        })
        .then((response) => {
          this.setState({ balanceOfAddress: response.data });
        });
    } catch (err) {
      console.log(err.message);
    }
  }

  async createTransaction(newTransaction) {
    try {
      await axios
        .post(`http://localhost:9000/api/v1/blockchain/create/transaction`, {
          fromAddress: newTransaction.fromAddress,
          toAddress: newTransaction.toAddress,
          amount: newTransaction.amount,
        })
        .then((response) => {
          //   if (response.status === 200) alert();
          //   else
          //   console.log(fromAddress, toAddress, amount);
          //   alert(response.data);
          if (response.status === 200) alert(response.data);
          else console.log("pezdaa");
        });
    } catch (err) {
      console.log(err.massage);
    }
  }

  render() {
    const { blockchain, selectedBlockTransactions, showTransactions } =
      this.state;
    const { createTransaction } = this;

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
          showTransactions,
          createTransaction,
          setShowTransactions,
          setSelectedBlockTransactions,
        }}
      >
        {this.props.children}
      </BlockchainContext.Provider>
    );
  }
}
