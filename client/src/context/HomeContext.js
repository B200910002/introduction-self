import React, { Component, createContext } from "react";
import axios from "axios";
import { GRADE_URL } from "../constants/config";

export const HomeContext = createContext({});

export class HomeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { grade: [] };
  }
  componentDidMount = () => {
    this.refreshData();
  };
  refreshData = async () => {
    try {
      await axios.get(GRADE_URL).then((response) => {
        this.setState({ grade: response.data });
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  render() {
    const { grade } = this.state;
    return (
      <HomeContext.Provider value={{grade}}>
        {this.props.children}
      </HomeContext.Provider>
    );
  }
}
