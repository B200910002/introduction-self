import React, { Component } from "react";
import {} from "../../constants/styles";
import { BlockchainContext } from "../../context/Context";

class PendingTransactions extends Component {
  // constructor(props) {
  //     super(props);
  // }
  static contextType = BlockchainContext;
  render() {
    return <div></div>;
  }
}

export default PendingTransactions;
