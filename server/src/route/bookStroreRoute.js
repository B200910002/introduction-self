const express = require("express");
const router = express.Router();
const bookStoreCtrl = require("../controller/bookStoreCtrl");

//get
router.get("/authors", bookStoreCtrl.getAllAuthors);
router.get("/languages", bookStoreCtrl.getAllLanguages);
router.get("/publishers", bookStoreCtrl.getAllPublishers);
router.get("/genres", bookStoreCtrl.getAllGenres);
router.get("/origin-books", bookStoreCtrl.getAllOriginBooks);
router.get("/edition-books", bookStoreCtrl.getAllEditionBooks);
router.get("/books", bookStoreCtrl.getAllBooks);
router.get("/edition-books/:id", bookStoreCtrl.getByIdEditionBook);


//post
router.post("/");
router.post("/create-author", bookStoreCtrl.createAuthor);
router.post("/create-language", bookStoreCtrl.createLanguage);
router.post("/create-publisher", bookStoreCtrl.createPublisher);
router.post("/create-genre", bookStoreCtrl.createGenre);
router.post("/create-origin-book", bookStoreCtrl.createOriginBook);
router.post("/create-edition-book", bookStoreCtrl.createEditionBook);

router.post("/import-authors", bookStoreCtrl.importAuthors);
router.post("/import-languages", bookStoreCtrl.importLanguages);
router.post("/import-publishers", bookStoreCtrl.importPublishers);
router.post("/import-genres", bookStoreCtrl.importGenres);
router.post("/import-origin-books", bookStoreCtrl.importOriginBooks);
router.post("/import-edition-books", bookStoreCtrl.importEditionBooks);

router.post("/upload-picture", bookStoreCtrl.uploadPic);

//put

//delete
router.delete(
  "/delete-by-id-edition-book/:id",
  bookStoreCtrl.deleteByIdEditionBook
);

module.exports = router;
