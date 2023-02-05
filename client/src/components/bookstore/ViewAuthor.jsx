import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Fonts } from "../../constants/styles";
import { BookstoreContext } from "../../context/BookstoreContext";
import AddAuthor from "./AddAuthor";
import EditAuthor from "./EditAuthor";

export default class ViewAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = { author: {}, addModalShow: false, editModalShow: false };
  }
  static contextType = BookstoreContext;
  render() {
    const { authors } = this.context;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <>
        <p style={Fonts.largeGray}>Authors</p>
        <Button onClick={() => this.setState({ addModalShow: true })}>
          Add Author
        </Button>
        <AddAuthor show={this.state.addModalShow} onHide={addModalClose} />
        <EditAuthor
          show={this.state.editModalShow}
          onHide={editModalClose}
          author={this.state.author}
        />
        <Table className="mt-4" bordered size="sm">
          <thead style={Fonts.smallGray}>
            <tr>
              <td>#</td>
              <td>name</td>
              <td>bio</td>
              <td>born</td>
              <td>died</td>
              <td>genres</td>
              <td>picture</td>
              <td>Controll</td>
            </tr>
          </thead>
          <tbody style={Fonts.smallGray}>
            {authors.map((author, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{author.authorName}</td>
                <td>
                  {author.bio ? author.bio.substring(0, 50) + " . . ." : ""}
                </td>
                <td>
                  {author.born
                    ? new Date(author.born.date).toString().substring(4, 16) +
                      " " +
                      author.born.description
                    : null}
                </td>
                <td>
                  {author.died
                    ? new Date(author.died.date).toString().substring(4, 16) +
                      " " +
                      author.died.description
                    : null}
                </td>
                <td>
                  <ul>
                    {author.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {author.picture.map((pic, index) => (
                      <li key={index}>{pic}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <Button
                    onClick={() =>
                      this.setState({ editModalShow: true, author: author })
                    }
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
