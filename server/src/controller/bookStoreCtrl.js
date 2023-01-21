const { Book } = require("../model/Book");

exports.get = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    // next(err);
    res.status(201).json(err.message);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, date, page, sibn, description, author, studio, picture } =
      req.body;
    const book = await Book.create({
      title: title,
      date: date,
      page: page,
      sibn: sibn,
      description: description,
      author: author,
      studio: studio,
      picture: picture,
    });
    res.status(200).json(book);
  } catch (err) {
    // next(err);
    res.status(201).json(err.message);
  }
};

exports.importBooks = async (req, res, next) => {
  try {
    const books = req.body;
    books.map(async (book) => {
      await Book.create({
        title: book.title,
        date: book.date,
        page: book.page,
        sibn: book.sibn,
        description: book.description,
        author: book.author,
        studio: book.studio,
        picture: book.picture,
      });
    });
    res.status(200).json("imported " + books.length + " books");
  } catch (err) {
    // next(err);
    res.status(201).json(err.message);
  }
};
