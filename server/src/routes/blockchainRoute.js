const express = require("express");
const router = express.Router();
const blockchainCtrl = require("../controllers/blockchainCtrl");

//
router.get("/check", blockchainCtrl.checkServer);
router.get("/", blockchainCtrl.initialize);
router.get("/blocks", blockchainCtrl.getAllBlocks);

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