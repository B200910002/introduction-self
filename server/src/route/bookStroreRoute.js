const express = require("express");
const router = express.Router();
const bookStoreCtrl = require("../controller/bookStoreCtrl");

//get
router.get("/", bookStoreCtrl.getAllBooks);

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

module.exports = router;
