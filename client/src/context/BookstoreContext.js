import React, { Component, createContext } from "react";
import axios from "axios";
import { BOOKSTORE_URL } from "../constants/config";

export const BookstoreContext = createContext({});

export class BookstoreProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { authors: [], genres: [], file: "" };
  }

  componentDidMount = () => {
    this.getAllAuthors();
    this.getAllGenres();
  };

  getAllAuthors = () => {
    try {
      axios.get(BOOKSTORE_URL + "/authors").then((response) => {
        this.setState({ authors: response.data });
      });
    } catch (e) {
      alert(e.message);
    }
  };

  createAuthor = (author) => {
    try {
      axios
        .post(BOOKSTORE_URL + "/create-author", {
          authorName: author.authorName,
          picture: author.picture,
          bio: author.bio,
          born: { date: author.birthDate, description: author.birthPlace },
          died: { date: author.diedDate, description: author.diedPlace },
          genres: author.genres,
        })
        .then((response) => {
          // alert(response.data._id);
          console.log(response.data);
        });
    } catch (e) {
      alert(e.message);
    }
  };

  getAllGenres = () => {
    try {
      axios.get(BOOKSTORE_URL + "/genres").then((response) => {
        this.setState({ genres: response.data });
      });
    } catch (e) {
      alert(e.message);
    }
  };

  uploadPicture = (event) => {
    const photo = event.target.files[0];
    this.photofilename = photo.name;
    var formPhoto = new FormData();
    formPhoto.append("photo", photo);

    axios
      .post(BOOKSTORE_URL + "/upload-picture", formPhoto)
      .then((response) => {
        this.setState({ file: response.data });
      });
  };

  render() {
    const { authors, genres, file } = this.state;
    const { uploadPicture, createAuthor } = this;
    return (
      <BookstoreContext.Provider
        value={{ authors, genres, file, uploadPicture, createAuthor }}
      >
        {this.props.children}
      </BookstoreContext.Provider>
    );
  }
}
