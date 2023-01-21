const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
});

const addressSchema = new mongoose.Schema({
  country: String,
  state: String,
  city: String,
  description: String,
});

const studioSchema = new mongoose.Schema({
  studioName: String,
  description: String,
  address: addressSchema,
});

const pictureSchema = new mongoose.Schema({
  pictures: [String],
});

const bookSchema = new mongoose.Schema({
  title: String,
  date: Date,
  page: Number,
  sibn: Number,
  description: String,
  author: authorSchema,
  studio: studioSchema,
  picture: pictureSchema,
});

const markBookSchema = new mongoose.Schema({
  date: Date,
  page: Number,
  book: bookSchema,
  customer: {
    name: String,
    gmail: String,
  },
  state: String,
});

module.exports.Book = mongoose.model("Book", bookSchema);
module.exports.MarkBook = mongoose.model("MarkBook", markBookSchema);
