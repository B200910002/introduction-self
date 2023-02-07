import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Auth extends Component {
  render() {
    return (
      <>
        {!localStorage.getItem("user") ? (
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
