const express = require("express");
const router = express.Router();
const bookStoreCtrl = require("../controller/bookStoreCtrl");

//get
router.get("/", bookStoreCtrl.get);

//post
router.post("/createBook", bookStoreCtrl.createBook);
router.post("/importBooks", bookStoreCtrl.importBooks);

//put

//delete

module.exports = router;
