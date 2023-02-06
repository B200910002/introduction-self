import React, { Component, createContext } from "react";
import axios from "axios";
import { LOGIN_URL, REGISTER_URL } from "../constants/config";

export const AuthContext = createContext({});

export class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  setEmail = (username) => {
    this.setState({ email: username });
  };

  setPassword = (password) => {
    this.setState({ password: password });
  };

  login = async () => {
    try {
      const response = await axios.post(LOGIN_URL, {
        email: this.state.email,
        password: this.state.password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
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
    localStorage.removeItem("token");
    window.location.href = "/auth/login";
    try {
    } catch (e) {
      console.log(e.message);
    }
  };

  register = async () => {
    try {
      await axios
        .post(REGISTER_URL, {
          email: this.state.email,
          password: this.state.password,
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
    const { email, password } = this.state;
    const { setEmail, setPassword, login, logout, register } = this;
    return (
      <AuthContext.Provider
        value={{
          email,
          password,
          setEmail,
          setPassword,
          login,
          logout,
          register,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
