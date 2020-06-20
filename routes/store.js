const express = require("express");
const router = express.Router();
const storeController = require("../controllers/store");

router.get("/all", storeController.getAllStores);

module.exports = router;
