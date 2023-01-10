import React, { Component } from "react";
import { Colors } from "../../constants/styles";
import { BlockchainContext } from "../../context/Context";
import { Table } from "react-bootstrap";

export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [], transaction: {} };
  }

  static contextType = BlockchainContext;

  render() {
    const { selectedBlockTransactions } = this.context;
    return (
      <div style={styles.container}>
        <h1>Transactions</h1>
        <div style={styles.table}>
          <Table className="mt-4" bordered size="sm">
            <thead style={{ color: Colors.grayColor }}>
              <tr>
                <td>index</td>
                <td>from</td>
                <td>to</td>
                <td>amount</td>
                <td>timestamp</td>
                <td>valid</td>
              </tr>
            </thead>
            <tbody style={{ color: Colors.grayColor }}>
              {selectedBlockTransactions.map((transaction) => (
                <tr key={transaction.signature}>
                  <td>1</td>
                  <td>
                    {transaction.fromAddress ? (
                      transaction.fromAddress.slice(0, 10)
                    ) : (
                      <p>System</p>
                    )}
                  </td>
                  <td>{transaction.toAddress.slice(0, 10)}</td>
                  <td>{transaction.amount}</td>
                  <td>{"Jan 9, 2000, 21:13"}</td>
                  <td>valid</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontSize: "24px",
    color: Colors.grayColor,
  },
  table: {
    backgroundColor: Colors.containerBackColor,
  },
};
