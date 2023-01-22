const {
  OriginBook,
  EditionBook,
  Language,
  Publisher,
  Author,
  Genre,
} = require("../model/Book");

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await EditionBook.find();
    for (let book of books) {
      const author = await Author.findById(book.author);
      const publisher = await Publisher.findById(book.publisher);
      const language = await Language.findById(book.language);
      book.author = author;
      book.publisher = publisher;
      book.language = language;
    }
    res.status(200).json(books);
  } catch (e) {
    // next(err);
    res.status(201).json(e.message);
  }
};

exports.createGenre = async (req, res, next) => {
  try {
    const { genre, description } = req.body;
    const newGenre = await Genre.create({
      genre: genre,
      description: description,
    });
    res.status(200).json(newGenre);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.createAuthor = async (req, res, next) => {
  try {
    const { authorName, picture, bio, born, died, genre } = req.body;
    const newAuthor = await Author.create({
      authorName: authorName,
      picture: picture,
      bio: bio,
      born: born,
      died: died,
      genre: genre,
    });
    res.status(200).json(newAuthor);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.createPublisher = async (req, res, next) => {
  try {
    const { publisherName, description } = req.body;
    const newPublisher = await Publisher.create({
      publisherName: publisherName,
      description: description,
    });
    res.status(200).json(newPublisher);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.creataeLanguage = async (req, res, next) => {
  try {
    const { language, description } = req.body;
    const newLanguage = await Language.create({
      language: language,
      description: description,
    });
    res.status(200).json(newLanguage);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.createOriginBook = async (req, res, next) => {
  try {
    const { originTitle, originAuthor, genres, awards, setting, characters } =
      req.body;
    const auth = await Author.findById(originAuthor);
    const gens = [];
    for (let genre of genres) {
      const g = await Genre.findById(genre);
      gens.push(g._id);
    }
    const newB = await OriginBook.create({
      originTitle: originTitle,
      originAuthor: auth._id,
      genres: gens,
      awards: awards,
      setting: setting,
      characters: characters,
    });
    res.status(200).json(newB);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.createEditionBook = async (req, res, next) => {
  try {
    const {
      title,
      isbn,
      picture,
      description,
      pages,
      date,
      originBook,
      editionAuthor,
      publisher,
      language,
    } = req.body;
    const bo = await OriginBook.findById(originBook);
    const auth = await Author.findById(editionAuthor);
    const pub = await Publisher.findById(publisher);
    const lan = await Language.findById(language);
    const newBookEdition = await EditionBook.create({
      title: title,
      isbn: isbn,
      picture: picture,
      description: description,
      pages: pages,
      date: date,
      originBook: bo._id,
      editionAuthor: auth._id,
      publisher: pub._id,
      language: lan._id,
    });
    res.status(200).json(newBookEdition);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

