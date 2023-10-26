const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

router.get("/add", clientController.novoClient);
router.post("/add", clientController.novoClientSave);
router.get("/", clientController.listaClientes);

module.exports = router;
