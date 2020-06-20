const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction");

router.get("/all", transactionController.getAllTransactions);

module.exports = router;
