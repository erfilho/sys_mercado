const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainControler");

router.get("/", mainController.mainRedirect);

module.exports = router;
