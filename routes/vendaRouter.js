const express = require("express");
const router = express.Router();

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/cadastro", (req, res) => {
  auth = true;
  res.render("cadastro_venda", { auth });
});

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/historico", (req, res) => {
  auth = true;
  res.render("historico_vendas", { auth });
});

module.exports = router;
