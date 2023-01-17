import "./Login.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default class Login extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { username: "", password: "" };
  //   }
  static contextType = AuthContext;
  render() {
    const { setUsername, setPassword, login } = this.context;
    return (
      <div className="caixa__login">
        <h2>Login</h2>
        <form>
          <div className="caixa__login-input">
            <input
              type="text"
              required
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <label>Email</label>
          </div>
          <div className="caixa__login-input">
            <input
              type="password"
              required
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <label>Password</label>
          </div>
          <Link to="/" onClick={() => login()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            login
          </Link>
        </form>
      </div>
    );
  }
}