import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import { BookstoreContext } from "../../context/BookstoreContext";
import { Fonts } from "../../constants/styles";

export default class AddEditionBook extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Book
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="primary" 
          // onClick={() => createAuthor(this.state)}
          >
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
