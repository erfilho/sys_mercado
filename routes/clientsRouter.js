const express = require("express");
const router = express.Router();

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/cadastro", (req, res) => {
  auth = true;
  res.render("cadastro_cliente", { auth });
});

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/listagem", (req, res) => {
  auth = true;
  res.render("listagem_clientes", { auth });
});

module.exports = router;
