const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

router.get("/add", clientController.novoClient);
router.post("/add", clientController.novoClientSave);
router.get("/", clientController.listaClientes);
router.get("/edit/:id", clientController.editaCliente);
router.post("/edit/:id", clientController.editaClienteSave);
router.post("/delete/:id", clientController.apagaClienteConfirma);
router.post("/search", clientController.searchClient);

module.exports = router;
