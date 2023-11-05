const express = require("express");
const SalesController = require("../controller/salesController");

const router = express.Router();


router.get("/", SalesController.listaVendas);
router.get("/add", SalesController.novaVenda);
router.get("/edit/:id", SalesController.editaVenda);
router.post("/edit/:id", SalesController.editaVendaSave);
router.post("/add", SalesController.novaVendaSave);
router.post("/delete/:id", SalesController.apagaVendaConfirma);

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/cadastro", (req, res) => {
  auth = true;
  res.render("cadastro_venda", { auth });
});

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/historico", (req, res) => {
  auth = true;
  res.render("historico_vendas", { auth, dados });
});

module.exports = router;
