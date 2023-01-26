import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Fonts } from "../../constants/styles";
import { BookstoreContext } from "../../context/BookstoreContext";
import AddOriginBook from "./AddOriginBook";
import EditOriginBook from "./EditOriginBook";

export default class ViewOrgingBook extends Component {
  constructor(props) {
    super(props);
    this.state = { book: {}, addModalShow: false, editModalShow: false };
  }
  static contextType = BookstoreContext;
  render() {
    const { originBooks } = this.context;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <>
        <p style={Fonts.largeGray}>Origin Books</p>
        <Button onClick={() => this.setState({ addModalShow: true })}>
          Add Origin Book
        </Button>
        <AddOriginBook show={this.state.addModalShow} onHide={addModalClose} />
        <EditOriginBook
          show={this.state.editModalShow}
          onHide={editModalClose}
          book={this.state.book}
        />
        <Table className="mt-4" bordered size="sm">
          <thead style={Fonts.smallGray}>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Author</td>
              <td>Genres</td>
              <td>Characters</td>
              <td>Awards</td>
              <td>Ratings</td>
              <td>Reviews</td>
              <td>controll</td>
            </tr>
          </thead>
          <tbody style={Fonts.smallGray}>
            {originBooks.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.originTitle}</td>
                <td>{book.originAuthor}</td>
                <td>
                  <ul>
                    {book.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {book.characters.map((char, index) => (
                      <li key={index}>{char}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  {
                    <ul>
                      {book.awards.map((award, index) => (
                        <li key={index}>{String(award).substring(0, 12)}. . .</li>
                      ))}
                    </ul>
                  }
                </td>
                <td>{book.ratings.length}</td>
                <td>{book.reviews.length}</td>
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
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
