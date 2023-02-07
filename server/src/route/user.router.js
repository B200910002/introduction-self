const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user.control");

//get
// router.get("/", gradeCtrl.getAll);

//post
router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);

module.exports = router;
