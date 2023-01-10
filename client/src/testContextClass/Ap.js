import React, { Component } from "react";
import Login from "./Login";
import Profile from "./Profile";
import { LoginContext } from "./LoginContext";

export default class Ap extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", showProfile: false };
  }

  login = (username) => {
    this.setState({ username: username, showProfile: true });
  };

  change = (username) => {
    this.setState({ username: username });
  };

  render() {
    const { username, showProfile } = this.state;
    const { login, change } = this;
    return (
      <LoginContext.Provider value={{ username, showProfile, login, change }}>
        <Login />
        {showProfile ? <Profile /> : <></>}
      </LoginContext.Provider>
    );
  }
}
