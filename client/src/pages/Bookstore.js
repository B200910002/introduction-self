import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { Fonts } from "../constants/styles";
import { BookstoreContext, BookstoreProvider } from "../context/BookstoreContext";

export default class Bookstore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BookstoreProvider>
        <BookstoreChild />
      </BookstoreProvider>
    );
  }
}

export class BookstoreChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = BookstoreContext;
  render() {
    const { author } = this.context;
    return (
      <>
        <div style={Fonts.normalGrayItalic}>
            <Link to="" style={styles.link}>Book Store</Link>
            <Link to="author" style={styles.link}>Author</Link>
            <Link to="" style={styles.link}>Origin book</Link>
            <Link to="" style={styles.link}>Edition book</Link>
        </div>
        <Outlet />
      </>
    );
  }
}

const styles = {
    link: {
      marginRight: "50px",
    },
  };