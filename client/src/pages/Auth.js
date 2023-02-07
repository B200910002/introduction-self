import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default class Auth extends Component {
  static contextType = AuthContext;
  render() {
    const { user } = this.context;
    const isAuth = user ? user.token : undefined;
    return (
      <>
        {!isAuth ? (
          <div className="caixa__login">
            <h2>
              <Link to="login">Login</Link>
              {" / "}
              <Link to="register">Register</Link>
            </h2>
            <Outlet />
          </div>
        ) : (
          <>{(window.location.href = "/")}</>
        )}
      </>
    );
  }
}
