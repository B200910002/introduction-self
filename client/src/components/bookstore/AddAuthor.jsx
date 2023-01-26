import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import { BookstoreContext } from "../../context/BookstoreContext";
import { Fonts } from "../../constants/styles";

export default class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: "",
      bio: "",
      birthDate: "",
      birthPlace: "",
      diedDate: "",
      diedPlace: "",
      genres: [],
      picture: [],
    };
  }
  static contextType = BookstoreContext;
  render() {
    const { genres, uploadPicture, createAuthor } = this.context;
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Author
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={Fonts.smallGray}>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="name">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  placeholder="Author name"
                  onChange={(event) =>
                    this.setState({ authorName: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="bio">
                <Form.Label>bio</Form.Label>
                <Form.Control
                  type="text"
                  name="bio"
                  placeholder="bio"
                  onChange={(event) =>
                    this.setState({ bio: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="born" style={{ border: "solid black" }}>
                <Form.Label>born date</Form.Label>
                <Form.Control
                  type="date"
                  name="born"
                  placeholder="birth day"
                  onChange={(event) =>
                    this.setState({ birthDate: event.target.value })
                  }
                />
                <Form.Label>born in</Form.Label>
                <Form.Control
                  type="text"
                  name="born"
                  placeholder="birth place"
                  onChange={(event) =>
                    this.setState({ birthPlace: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="died" style={{ border: "solid black" }}>
                <Form.Label>died date</Form.Label>
                <Form.Control
                  type="date"
                  name="died"
                  placeholder="died day"
                  onChange={(event) =>
                    this.setState({ diedDate: event.target.value })
                  }
                />
                <Form.Label>died in</Form.Label>
                <Form.Control
                  type="text"
                  name="died"
                  placeholder="died place"
                  onChange={(event) =>
                    this.setState({ diedPlace: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="genres">
                <Form.Label>genres</Form.Label>
                <Form.Control
                  as="select"
                  name="genres"
                  placeholder="genres"
                  onChange={(event) =>
                    this.setState({ genres: [event.target.value] })
                  }
                >
                  {genres.map((genre, index) => (
                    <option key={index} value={genre._id}>
                      {genre.genre}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="picture">
                <Image width={540} src={this.state.picture[0]} />
                <br />
                <Form.Control
                  type="file"
                  name="picture"
                  required
                  placeholder="picture"
                  onChange={async (event) => {
                    let pic = await uploadPicture(event);
                    console.log(pic);
                    this.setState({ picture: [pic] });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => createAuthor(this.state)}>
            Add Author
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
