import React, { Component } from "react";
import { Colors, Fonts } from "../../constants/styles";
import { Table, Button } from "react-bootstrap";
import { BlockchainContext } from "../../context/BlockchainContext";

export default class PendingTransactions extends Component {
  // constructor(props) {
  //     super(props);
  // }
  static contextType = BlockchainContext;
  render() {
    const { blockchain, createBlock } = this.context;
    return (
      <div>
        <p style={Fonts.largeGray}>Pending transactions</p>
        {blockchain.pendingTransactions.length !== 0 ? (
          <>
            <div style={styles.table}>
              <Table className="mt-4" bordered size="sm">
                <thead style={Fonts.smallGray}>
                  <tr>
                    <td>#</td>
                    <td>From</td>
                    <td>To</td>
                    <td>Amount</td>
                    <td>Timestamp</td>
                    <td>Valid?</td>
                  </tr>
                </thead>
                <tbody style={Fonts.smallGray}>
                  {blockchain.pendingTransactions.map((transaction) => (
                    <tr key={transaction.timestamp}>
                      <td>1</td>
                      <td>
                        {transaction.fromAddress ? (
                          transaction.fromAddress.slice(0, 40)
                        ) : (
                          <p>System</p>
                        )}
                      </td>
                      <td>{transaction.toAddress.slice(0, 40)}</td>
                      <td>{transaction.amount}</td>
                      <td>
                        {transaction.timestamp}{" "}
                        <p style={styles.timestamp}>
                          {new Date(transaction.timestamp).toString()}
                        </p>
                      </td>
                      <td>valid</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <Button
              onClick={() => {
                createBlock();
              }}
            >
              Start mining...
            </Button>
          </>
        ) : (
          <>
            <p style={Fonts.smallGrayItalic}>No pending transaction.</p>
          </>
        )}
      </div>
    );
  }
}

const styles = {
  container: {},
  table: {
    backgroundColor: Colors.containerBackColor,
  },
  timestamp: {
    fontSize: "10px",
  },
};
