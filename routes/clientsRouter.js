const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

router.get("/add", clientController.novoClient);
router.post("/add", clientController.novoClientSave);
router.get("/", clientController.listaClientes);
router.get("/edit/:id", clientController.editaCliente);
router.post("/edit/:id", clientController.editaClienteSave);
router.get("/delete/:id", clientController.apagaCliente);
router.post("/delete/:id", clientController.apagaClienteConfirma);

module.exports = router;
