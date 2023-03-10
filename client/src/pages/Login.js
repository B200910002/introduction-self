import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  static contextType = AuthContext;
  render() {
    const { login, error } = this.context;
    const { email, password } = this.state;
    return (
      <form onSubmit={login}>
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
            enterKeyHint="submit"
            required
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <label>Password</label>
        </div>
        <Link className="a" onClick={() => login(email, password)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          login
        </Link>
        {error && <div className="error">{error}</div>}
      </form>
    );
  }
}
