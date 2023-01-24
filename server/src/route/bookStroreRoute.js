const express = require("express");
const router = express.Router();
const bookStoreCtrl = require("../controller/bookStoreCtrl");

//get
router.get("/authors", bookStoreCtrl.getAllAuthors);
router.get("/languages", bookStoreCtrl.getAllLanguages);
router.get("/publisher", bookStoreCtrl.getAllPublishers);
router.get("/genres", bookStoreCtrl.getAllGenres);
router.get("/origin-books", bookStoreCtrl.getAllOriginBooks);
router.get("/edition-books", bookStoreCtrl.getAllEditionBooks);
router.get("/edition-books/:id", bookStoreCtrl.getByIdEditionBook);

//post
router.post("/");
router.post("/create-author", bookStoreCtrl.createAuthor);
router.post("/create-language", bookStoreCtrl.creataeLanguage);
router.post("/create-publisher", bookStoreCtrl.createPublisher);
router.post("/create-genre", bookStoreCtrl.createGenre);
router.post("/create-origin-book", bookStoreCtrl.createOriginBook);
router.post("/create-edition-book", bookStoreCtrl.createEditionBook);

//put

//delete
router.delete(
  "/delete-by-id-edition-book/:id",
  bookStoreCtrl.deleteByIdEditionBook
);

module.exports = router;
