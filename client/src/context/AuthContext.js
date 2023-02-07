import React, { Component, createContext } from "react";
import axios from "axios";
import { LOGIN_URL, REGISTER_URL } from "../constants/config";

export const AuthContext = createContext({});

export class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
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
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  };

  logout = async () => {
    localStorage.removeItem("user");
    window.location.href = "/auth/login";
    try {
    } catch (e) {
      console.log(e.message);
    }
  };

  register = async (email, password, repeatPassword) => {
    try {
      await axios
        .post(REGISTER_URL, {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
          } else {
            alert("email or password is not valid!");
          }
        });
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    const { user } = this.state;
    const { login, logout, register } = this;
    return (
      <AuthContext.Provider value={{ user, login, logout, register }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
