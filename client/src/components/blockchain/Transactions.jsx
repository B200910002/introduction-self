import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Colors, Fonts } from "../../constants/styles";
import { BlockchainContext } from "../../context/BlockchainContext";

export default class Transaction extends Component {
  static contextType = BlockchainContext;
  render() {
    const { selectedBlock, getBalanceOfAddress } = this.context;
    return (
      <div style={styles.container}>
        <p style={Fonts.largeGray}>
          Transactions inside block {selectedBlock.index}
        </p>
        {selectedBlock.transactions.length !== 0 ? (
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
                {selectedBlock.transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {transaction.fromAddress ? (
                        <Link
                          to="wallet"
                          onClick={() => {
                            getBalanceOfAddress(transaction.fromAddress);
                          }}
                        >
                          {transaction.fromAddress.slice(0, 40)}
                        </Link>
                      ) : (
                        <p>System</p>
                      )}
                    </td>
                    <td>
                      <Link
                        to="wallet"
                        onClick={() => {
                          getBalanceOfAddress(transaction.toAddress);
                        }}
                      >
                        {transaction.toAddress.slice(0, 40)}
                      </Link>
                    </td>
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
        ) : (
          <>
            <p style={Fonts.smallGrayItalic}>This block has no transactions</p>
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
  address: {
    border: "none",
    background: "none",
    cursor: "pointer",
    margin: "0",
    padding: "0",
    color: Colors.whiteColor,
    textDecoration: "underline",
  },
};
