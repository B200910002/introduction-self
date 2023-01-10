import React, { Component } from "react";
import { LoginContext } from "./LoginContext";

export default class Profile extends Component {
  // constructor(props) {
  //   super(props);
  // }
  static contextType = LoginContext;
  render() {
    const { username } = this.context;
    return (
      <>
        <h1>Profile</h1>
        <h2>Username: {username}</h2>
      </>
    );
  }
}
