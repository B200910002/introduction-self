import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", repeatPassword: "" };
  }
  static contextType = AuthContext;
  render() {
    const { register, error } = this.context;
    const { email, password, repeatPassword } = this.state;
    return (
      <form>
        <div className="caixa__login-input">
          <input
            type="text"
            required
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          <label>Email</label>
        </div>
        <div className="caixa__login-input">
          <input
            type="password"
            required
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <label>Password</label>
        </div>
        <div className="caixa__login-input">
          <input
            type="password"
            required
            onChange={(event) => {
              this.setState({ repeatPassword: event.target.value });
            }}
          />
          <label>Repeat-password</label>
        </div>
        <Link
          className="a"
          onClick={() => register(email, password, repeatPassword)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          register
        </Link>
        {error && <div className="error">{error}</div>}
      </form>
    );
  }
}
