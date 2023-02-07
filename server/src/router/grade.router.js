const express = require("express");
const router = express.Router();
const gradeCtrl = require("../controller/grade.controller");

//get
router.get("/", gradeCtrl.getAll);

//post
router.post("/user", gradeCtrl.create);
router.post("/import", gradeCtrl.import);

module.exports = router;
