import React, { Component } from "react";
import { Table, Button, Image } from "react-bootstrap";
import { Fonts } from "../../constants/styles";
import { BookstoreContext } from "../../context/BookstoreContext";
import AddEditionBook from "./AddEditionBook";
import EditEditionBook from "./EditEditionBook";

export default class ViewEditionBook extends Component {
  constructor(props) {
    super(props);
    this.state = { book: {}, addModalShow: false, editModalShow: false };
  }
  static contextType = BookstoreContext;
  render() {
    const { editionBooks } = this.context;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <>
        <p style={Fonts.largeGray}>Edition Books</p>
        <Button onClick={() => this.setState({ addModalShow: true })}>
          Add Edition Book
        </Button>
        <AddEditionBook show={this.state.addModalShow} onHide={addModalClose} />
        <EditEditionBook
          show={this.state.editModalShow}
          onHide={editModalClose}
          book={this.state.book}
        />
        <Table className="mt-4" bordered size="sm">
          <thead style={Fonts.smallGray}>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Picture</td>
              <td>ISBN</td>
              <td>Description</td>
              <td>Pages</td>
              <td>Date</td>
              <td>Translator</td>
              <td>Publisher</td>
              <td>Language</td>
              <td>Original</td>
              <td>Controll</td>
            </tr>
          </thead>
          <tbody style={Fonts.smallGray}>
            {editionBooks.length > 0 ? (
              editionBooks.map((book, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td><Image width="100px" height="150px" src={book.picture}/></td>
                  <td>{book.isbn}</td>
                  <td>{String(book.description).substring(0, 10)} . . .</td>
                  <td>{book.pages}</td>
                  <td>{new Date(book.date).toUTCString().substring(4, 16)}</td>
                  <td>{book.editionAuthor}</td>
                  <td>{book.publisher}</td>
                  <td>{book.language}</td>
                  <td>{book.originBook}</td>
                  <td>
                    <Button
                      onClick={() => this.setState({ editModalShow: true })}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button className="mr-2" variant="danger">
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </Table>
      </>
    );
  }
}
