const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  genre: String,
  description: String,
});

const authorSchema = new mongoose.Schema({
  authorName: String,
  picture: [String],
  bio: String,
  born: {
    date: Date,
    description: String,
  },
  died: {
    date: Date,
    description: String,
  },
  genre: [Object],
});

const publisherSchema = new mongoose.Schema({
  publisherName: String,
  description: String,
});

const languageSchema = new mongoose.Schema({
  language: String,
  description: String,
});

const editionBookSchema = new mongoose.Schema({
  title: String,
  isbn: Number,
  picture: String,
  description: String,
  pages: Number,
  date: Date,
  originBook: Object,
  editionAuthor: Object,
  publisher: Object,
  language: Object,
});

const originBookSchema = new mongoose.Schema({
  originTitle: String,
  originAuthor: Object,
  genres: [Object],
  awards: [String],
  setting: String,
  characters: [Object],
  bookEditions: [Object],
  ratings: [Object],
  reviews: [Object],
});

module.exports.Genre = mongoose.model("Genre", genreSchema);
module.exports.Author = mongoose.model("Author", authorSchema);
module.exports.Publisher = mongoose.model("Publisher", publisherSchema);
module.exports.Language = mongoose.model("Language", languageSchema);
module.exports.EditionBook = mongoose.model("EditionBook", editionBookSchema);
module.exports.OriginBook = mongoose.model("OriginBook", originBookSchema);
