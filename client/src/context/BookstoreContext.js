import React, { Component, createContext } from "react";
import axios from "axios";
import {
  BOOKSTORE_URL,
  BOOKSTORE_CREATE_ORIGIN_BOOK,
  BOOKSTORE_CREATE_EDITION_BOOK,
} from "../constants/config";

export const BookstoreContext = createContext({});

export class BookstoreProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originBooks: [],
      editionBooks: [],
      authors: [],
      genres: [],
      languages: [],
      publishers: [],
    };
  }

  componentDidMount = () => {
    this.getAllEditionBooks();
    this.getAllOriginBooks();
    this.getAllAuthors();
    this.getAllGenres();
    this.getAllLanguages();
    this.getAllPublishers();
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
          born: author.birthDate ? { date: author.birthDate, description: author.birthPlace } : null,
          died: author.diedDate ? { date: author.diedDate, description: author.diedPlace } : null,
          genres: author.genres,
        })
        .then((response) => {
          alert(response.data._id);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  createOriginBook = async (originBook) => {
    try {
      await axios
        .post(BOOKSTORE_CREATE_ORIGIN_BOOK, {
          originTitle: originBook.title,
          originAuthor: originBook.author,
          genres: originBook.genres,
          characters: originBook.characters,
          awards: originBook.awards,
        })
        .then((response) => {
          alert(response.data._id);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  createEditionBook = async (editionBook) => {
    try {
      await axios
        .post(BOOKSTORE_CREATE_EDITION_BOOK, {
          title: editionBook.title,
          isbn: editionBook.isbn,
          picture: editionBook.picture,
          description: editionBook.description,
          pages: editionBook.pages,
          date: editionBook.date,
          originBook: editionBook.originBook,
          editionAuthor: editionBook.translator,
          publisher: editionBook.publisher,
          language: editionBook.language,
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

  getAllLanguages = async () => {
    try {
      await axios.get(BOOKSTORE_URL + "/languages").then((response) => {
        this.setState({ languages: response.data });
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  getAllPublishers = async () => {
    try {
      await axios.get(BOOKSTORE_URL + "/publishers").then((response) => {
        this.setState({ publishers: response.data });
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
    const {
      originBooks,
      editionBooks,
      authors,
      genres,
      languages,
      publishers,
    } = this.state;
    const { uploadPicture, createAuthor, createOriginBook, createEditionBook } =
      this;
    return (
      <BookstoreContext.Provider
        value={{
          originBooks,
          editionBooks,
          authors,
          genres,
          languages,
          publishers,
          uploadPicture,
          createAuthor,
          createOriginBook,
          createEditionBook,
        }}
      >
        {this.props.children}
      </BookstoreContext.Provider>
    );
  }
}
