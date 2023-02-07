import React, { Component, createContext } from "react";
import axios from "axios";
import { LOGIN_URL, REGISTER_URL } from "../constants/config";

export const AuthContext = createContext({});

export class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, error: "" };
  }

  componentDidMount = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({ user: user });
  };

  login = async (email, password) => {
    try {
      const response = await axios.post(LOGIN_URL, {
        email: email,
        password: password,
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        alert("Login successfully");
        this.setState({ isAuthentication: true });
        window.location.href = "/";
      } else {
        alert("Please check your email and password");
      }
    } catch (e) {
      this.setState({ error: e.response.data.error });
    }
  };

  logout = async () => {
    localStorage.removeItem("user");
    window.location.href = "/auth/login";
    try {
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.response.data.error });
    }
  };

  register = async (email, password, repeatPassword) => {
    try {
      await axios
        .post(REGISTER_URL, {
          email: email,
          password: password,
          repeatPassword: repeatPassword,
        })
        .then((response) => {
          if (response.status === 200) alert("Register successfully");
        });
    } catch (e) {
      this.setState({ error: e.response.data.error });
    }
  };

  render() {
    const { user, error } = this.state;
    const { login, logout, register } = this;
    return (
      <AuthContext.Provider value={{ user, error, login, logout, register }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
