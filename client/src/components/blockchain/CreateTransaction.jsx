import React, { Component } from "react";
import { Fonts } from "../../constants/styles";
import {
  FormGroup,
  Form,
  Button,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { BlockchainContext } from "../../context/Context";

export default class CreateTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromAddress:
        "0420a71f21eac81e568839bb2668724e8666abd67adf0ad04ba206581110a5c2c693b018acfa97122def6313c7068896df95928d0db2a4e9fe85b093fb85917ab4",
      toAddress: "",
      amount: 0,
    };
  }
  static contextType = BlockchainContext;
  render() {
    const { createTransaction } = this.context;
    return (
      <div style={styles.container}>
        <p style={Fonts.largeGray}>Create transaction</p>
        <Form>
          <FormGroup>
            <FormLabel style={Fonts.smallGray}>From address</FormLabel>
            <FormControl
              type="text"
              name="fromAddress"
              disabled
              placeholder="jak"
              defaultValue={this.state.fromAddress}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel style={Fonts.smallGray}>To address</FormLabel>
            <FormControl
              type="text"
              name="fromAddress"
              placeholder="to address"
              onChange={(event) => {
                this.setState({ toAddress: event.target.value });
              }}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel style={Fonts.smallGray}>Amount</FormLabel>
            <FormControl
              type="number"
              name="fromAddress"
              placeholder="amount"
              onChange={(event) => {
                this.setState({ amount: Number(event.target.value) });
              }}
            />
          </FormGroup>

          <FormGroup>
            <Button
              type="submit"
              onClick={() => {
                createTransaction(this.state);
                console.log(this.state);
              }}
            >
              Sign & create transaction
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const styles = {
  container: {},
};
