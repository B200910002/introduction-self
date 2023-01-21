import React, { Component, createContext } from "react";
import axios from "axios";
import { GRADE_URL, BOOKS_URL } from "../constants/config";

export const HomeContext = createContext({});

export class HomeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { grade: [], books: [] };
  }
  componentDidMount = () => {
    this.refreshData();
  };
  refreshData = async () => {
    try {
      await axios.get(GRADE_URL).then((response) => {
        this.setState({ grade: response.data });
      });
      await axios.get(BOOKS_URL).then((response) => {
        this.setState({ books: response.data });
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  render() {
    const { grade, books } = this.state;
    return (
      <HomeContext.Provider value={{ grade, books }}>
        {this.props.children}
      </HomeContext.Provider>
    );
  }
}
