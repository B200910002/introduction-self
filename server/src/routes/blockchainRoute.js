const express = require("express");
const router = express.Router();
const blockchainCtrl = require("../controllers/blockchainCtrl");

//get
router.get("/", blockchainCtrl.initialize);

// post
router.post("/create/transaction", blockchainCtrl.createNewTransaction);
router.post("/create/block", blockchainCtrl.createNewBlock);
router.post("/getBalanceOfAddress/", blockchainCtrl.getBalanceOfAddress);

//put
// router.put("/update_name", blockchainCtrl.updateName);

//delete
router.delete("/delete/all", blockchainCtrl.deleteAll);
// router.delete();

module.exports = router;
