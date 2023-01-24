const {
  OriginBook,
  EditionBook,
  Language,
  Publisher,
  Author,
  Genre,
} = require("../model/Book");

exports.getAllLanguages = async (req, res, next) => {
  try {
    const langs = await Language.find();
    res.status(200).json(langs);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.getAllAuthors = async (req, res, next) => {
  try {
    const author = await Author.find();
    res.status(200).json(author);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.getAllGenres = async (req, res, next) => {
  try {
    const genre = await Genre.find();
    res.status(200).json(genre);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.getAllPublishers = async (req, res, next) => {
  try {
    const pub = await Publisher.find();
    res.status(200).json(pub);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.getAllOriginBooks = async (req, res, next) => {
  try {
    const originBook = await OriginBook.find();
    res.status(200).json(originBook);
  } catch (e) {
    res.status(201).json(e.message);
  }
};

exports.getAllEditionBooks = async (req, res, next) => {
  try {
    const result = [];
    const books = await EditionBook.find();
    for (let book of books) {
      const oBook = await OriginBook.findById(book.originBook);
      const oAuthor = await Author.findById(oBook.originAuthor);
      const language = await Language.findById(book.language);
      book.originBook = oBook;
      book.language = language;
      result.push({
        _id: book._id,
        title: book.title,
        author: oAuthor.authorName,
        date: book.date,
        language: book.language.language,
        picture: book.picture,
        __v: book.__v,
      });
    }
    res.status(200).json(result);
  } catch (e) {
    // next(err);
    res.status(201).json(e.message);
  }
};

exports.getByIdEditionBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const editionBook = await EditionBook.findById(id);
    const originBook = await OriginBook.findById(editionBook.originBook);
    const editionAuthor = await Author.findById(editionBook.editionAuthor);
    const publisher = await Publisher.findById(editionBook.publisher);
    const language = await Language.findById(editionBook.language);
    editionBook.originBook = originBook;
    editionBook.editionAuthor = editionAuthor;
    editionBook.publisher = publisher;
    editionBook.language = language;
    res.status(200).json(editionBook);
  } catch (e) {
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

exports.deleteByIdEditionBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    await EditionBook.findByIdAndDelete(id).then((data) => {
      if (!data) {
        res
          .status(404)
          .json({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.json({
          message: "User was deleted successfully!",
        });
      }
    });
  } catch (e) {
    res.status(201).json(e.message);
  }
};
