import React, { Component, createContext } from "react";
import axios from "axios";
import { BOOKSTORE_URL } from "../constants/config";

export const BookstoreContext = createContext({});

export class BookstoreProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { originBooks: [], editionBooks: [], authors: [], genres: [] };
  }

  componentDidMount = () => {
    this.getAllEditionBooks();
    this.getAllOriginBooks();
    this.getAllAuthors();
    this.getAllGenres();
  };

  getAllOriginBooks = async () => {
    try {
      await axios.get(BOOKSTORE_URL + "/origin-books").then((response) => {
        this.setState({ originBooks: response.data });
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  getAllEditionBooks = async () => {
    try {
      await axios.get(BOOKSTORE_URL + "/edition-books").then((response) => {
        this.setState({ editionBooks: response.data });
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  getAllAuthors = async () => {
    try {
      await axios.get(BOOKSTORE_URL + "/authors").then((response) => {
        this.setState({ authors: response.data });
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  createAuthor = async (author) => {
    try {
      await axios
        .post(BOOKSTORE_URL + "/create-author", {
          authorName: author.authorName,
          picture: author.picture,
          bio: author.bio,
          born: { date: author.birthDate, description: author.birthPlace },
          died: { date: author.diedDate, description: author.diedPlace },
          genres: author.genres,
        })
        .then((response) => {
          alert(response.data._id);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  getAllGenres = async () => {
    try {
      await axios.get(BOOKSTORE_URL + "/genres").then((response) => {
        this.setState({ genres: response.data });
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  uploadPicture = async (event) => {
    const photo = event.target.files[0];
    this.photofilename = photo.name;
    var formPhoto = new FormData();
    formPhoto.append("photo", photo);
    let result = "";
    await axios
      .post(BOOKSTORE_URL + "/upload-picture", formPhoto)
      .then((response) => {
        result = response.data;
      });
    return result;
  };

  render() {
    const { originBooks, editionBooks, authors, genres } = this.state;
    const { uploadPicture, createAuthor } = this;
    return (
      <BookstoreContext.Provider
        value={{
          originBooks,
          editionBooks,
          authors,
          genres,
          uploadPicture,
          createAuthor,
        }}
      >
        {this.props.children}
      </BookstoreContext.Provider>
    );
  }
}
