import React, { Component, createContext } from "react";
import axios from "axios";
import { LOGIN_URL, LOGOUT_URL } from "../constants/config";

export const AuthContext = createContext({});

export class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuthentication: false,
    };
  }

  setUsername = (username) => {
    this.setState({ username: username });
  };

  setPassword = (password) => {
    this.setState({ password: password });
  };

  login = () => {
    try {
      axios
        .post(LOGIN_URL, {
          username: this.state.username,
          password: this.state.password,
        })
        .then((response) => {
          if (response.status === 200) {
            this.setState({ isAuthentication: response.data });
            alert("log in...");
          } else {
            alert("username or password is not valid!");
          }
        });
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ isAuthentication: true });
  };

  logout = () => {
    try {
      axios.post(LOGOUT_URL).then((response) => {
        if (response.status === 200) {
          this.setState({ isAuthentication: false });
          alert("log out!...");
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  tick() {
    this.setState((state) => ({
      timer: state.timer + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { isAuthentication } = this.state;
    const { setUsername, setPassword, login, logout } = this;
    return (
      <AuthContext.Provider
        value={{
          setUsername,
          setPassword,
          login,
          logout,
          isAuthentication,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
