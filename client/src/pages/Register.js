import "./Login.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default class Register extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { username: "", password: "" };
  //   }
  static contextType = AuthContext;
  render() {
    const { setEmail, setPassword, register } = this.context;
    return (
      <>
        {!localStorage.getItem("token") ? (
          <div className="caixa__login">
            <h2>Register</h2>
            <form>
              <div className="caixa__login-input">
                <input
                  type="text"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
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
              <div className="caixa__login-input">
                <input
                  type="password"
                  required
                //   onChange={(event) => {
                //     setPassword(event.target.value);
                //   }}
                />
                <label>Repeat-password</label>
              </div>
              {/* <Link onClick={() => reigster()}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                register
              </Link> */}
              <button onClick={() => register()}>register</button>
            </form>
          </div>
        ) : (
          <>{(window.location.href = "/")}</>
        )}
      </>
    );
  }
}
