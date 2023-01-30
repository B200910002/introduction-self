import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import { BookstoreContext } from "../../context/BookstoreContext";
import { Fonts } from "../../constants/styles";

export default class AddOriginBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      genres: [],
      characters: [],
      awards: [],
      ratings: [],
      reviews: [],
    };
  }
  static contextType = BookstoreContext;
  render() {
    const { genres, authors, createOriginBook } = this.context;
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col
            // sm={6}
            >
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  required
                  placeholder="Title"
                  onChange={(event) =>
                    this.setState({ title: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  as="select"
                  name="author"
                  required
                  placeholder="Author"
                  onChange={(event) =>
                    this.setState({ author: event.target.value })
                  }
                >
                  {authors.map((author) => (
                    <option key={author._id} value={author._id}>
                      {author.authorName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="genres">
                <Form.Label>Genres</Form.Label>
                <Row>
                  <Col sm={6}>
                    <Form.Control
                      type="text"
                      name="genres"
                      required
                      placeholder="Genres"
                      value={this.state.genres}
                      onChange={() => this.setState({ genres: [] })}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      as="select"
                      name="genres"
                      required
                      placeholder="Genres"
                      onChange={(event) => {
                        this.state.genres.push(event.target.value);
                        this.setState({ genres: this.state.genres });
                      }}
                    >
                      {genres.map((genre) => (
                        <option value={genre._id} key={genre._id}>
                          {genre.genre}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="characters">
                <Form.Label>Characters</Form.Label>
                <Form.Control
                  type="text"
                  name="characters"
                  required
                  placeholder="Character String,string etc."
                  onChange={(event) => {
                    this.setState({
                      characters: event.target.value.split(","),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="awards">
                <Form.Label>Awards</Form.Label>
                <Form.Control
                  type="text"
                  name="awards"
                  required
                  placeholder="Awards String,string etc."
                  onChange={(event) => {
                    this.setState({
                      awards: event.target.value.split(","),
                    });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => createOriginBook(this.state)}
          >
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
