import React, { Component } from "react";
import { LoginContext } from "./LoginContext";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  static contextType = LoginContext;
  render() {
    const { login, change } = this.context;
    return (
      <>
        <input
          type="text"
          onChange={(event) => {
            change(event.target.value);
            this.setState({ username: event.target.value });
          }}
        />
        <input type="password" />
        <button
          onClick={() => {
            login(this.state.username);
          }}
        >
          Login
        </button>
      </>
    );
  }
}
