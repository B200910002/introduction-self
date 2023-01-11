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
        "9d2ae321496d68f58ee47a046a4d17419cbe480f109cb7f6f9644412f4a5895c",
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
              name="toAddress"
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
              name="amount"
              placeholder="amount"
              onChange={(event) => {
                this.setState({ amount: Number(event.target.value) });
              }}
            />
          </FormGroup>

          <FormGroup>
            <Button
              type="submit"
              onClick={(event) => {
                createTransaction(this.state);
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
