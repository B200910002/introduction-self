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
        <BookstoreConsumer />
      </BookstoreProvider>
    );
  }
}

class BookstoreConsumer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BookstoreContext.Consumer>
        {(context) => context.authors.length !== 0 ?(
          <>
            <div style={Fonts.normalGrayItalic}>
              <Link to="" style={styles.link}>
                Book Store
              </Link>
              <Link to="author" style={styles.link}>
                Author
              </Link>
              <Link to="originBook" style={styles.link}>
                Origin Book
              </Link>
              <Link to="editionBook" style={styles.link}>
                Edition Book
              </Link>
            </div>
            <Outlet />
          </>
        ) : (
          <>
            <p style={Fonts.normalGray}>server has turn off!</p>
          </>
        )}
      </BookstoreContext.Consumer>
    );
  }
}

const styles = {
  link: {
    marginRight: "50px",
  },
};
