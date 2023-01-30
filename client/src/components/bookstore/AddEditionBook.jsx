import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import { BookstoreContext } from "../../context/BookstoreContext";
import { Fonts } from "../../constants/styles";

export default class AddEditionBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      picture: "",
      isbn: 0,
      description: "",
      pages: 0,
      date: "",
      translator: "",
      publisher: "",
      language: "",
      originBook: "",
    };
  }
  static contextType = BookstoreContext;
  render() {
    const {
      originBooks,
      authors,
      publishers,
      languages,
      uploadPicture,
      createEditionBook,
    } = this.context;
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
            <Col sm={6}>
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

              <Form.Group controlId="isbn">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type="number"
                  name="isbn"
                  required
                  placeholder="ISBN"
                  onChange={(event) =>
                    this.setState({ isbn: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  required
                  placeholder="Description"
                  onChange={(event) =>
                    this.setState({ description: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="pages">
                <Form.Label>Pages</Form.Label>
                <Form.Control
                  type="number"
                  name="pages"
                  required
                  placeholder="Pages"
                  onChange={(event) =>
                    this.setState({ pages: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="date">
                <Form.Label>Pages</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  required
                  placeholder="Date"
                  onChange={(event) =>
                    this.setState({ date: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="translator">
                <Form.Label>Translator</Form.Label>
                <Form.Control
                  as="select"
                  name="translator"
                  required
                  placeholder="Translator"
                  onChange={(event) =>
                    this.setState({ translator: event.target.value })
                  }
                >
                  {authors.map((author) => (
                    <option key={author._id} value={author._id}>
                      {author.authorName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="publisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control
                  as="select"
                  name="publisher"
                  required
                  placeholder="Publisher"
                  onChange={(event) =>
                    this.setState({ publisher: event.target.value })
                  }
                >
                  {publishers.map((publisher) => (
                    <option key={publisher._id} value={publisher._id}>
                      {publisher.publisherName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="language">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  as="select"
                  name="language"
                  required
                  placeholder="Language"
                  onChange={(event) =>
                    this.setState({ language: event.target.value })
                  }
                >
                  {languages.map((language) => (
                    <option key={language._id} value={language._id}>
                      {language.language}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="originBook">
                <Form.Label>Origin Book</Form.Label>
                <Form.Control
                  as="select"
                  name="originBook"
                  required
                  placeholder="Original book"
                  onChange={(event) =>
                    this.setState({ originBook: event.target.value })
                  }
                >
                  {originBooks.map((originBook) => (
                    <option key={originBook._id} value={originBook._id}>
                      {originBook.originTitle}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="picture">
                <Image width={540} src={this.state.picture} />
                <br />
                <Form.Control
                  type="file"
                  name="picture"
                  required
                  placeholder="picture"
                  onChange={async (event) => {
                    let pic = await uploadPicture(event);
                    this.setState({ picture: pic });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => createEditionBook(this.state)}
          >
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
