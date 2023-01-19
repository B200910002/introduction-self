const express = require("express");
const router = express.Router();
const gradeCtrl = require("../controllers/gradeCtrl");

//get
router.get("/", gradeCtrl.get);

module.exports = router;
