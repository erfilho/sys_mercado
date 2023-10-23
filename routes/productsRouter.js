const express = require("express");
const router = express.Router();

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/cadastro", (req, res) => {
  auth = true;
  res.render("cadastro_produtos", { auth });
});

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/estoque", (req, res) => {
  auth = true;
  res.render("estoque_produtos", { auth });
});

module.exports = router;
