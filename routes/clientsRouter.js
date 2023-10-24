const express = require("express");
const router = express.Router();

const estados = [
  { uf: "AC", estado: "Acre" },
  { uf: "AL", estado: "Alagoas" },
  { uf: "AP", estado: "Amapá" },
  { uf: "AM", estado: "Amazonas" },
  { uf: "BA", estado: "Bahia" },
  { uf: "CE", estado: "Ceará" },
  { uf: "DF", estado: "Distrito Federal" },
  { uf: "ES", estado: "Espírito Santo" },
  { uf: "GO", estado: "Goiás" },
  { uf: "MA", estado: "Maranhão" },
  { uf: "MT", estado: "Mato Grosso" },
  { uf: "MS", estado: "Mato Grosso do Sul" },
  { uf: "MG", estado: "Minas Gerais" },
  { uf: "PA", estado: "Pará" },
  { uf: "PB", estado: "Paraíba" },
  { uf: "PR", estado: "Paraná" },
  { uf: "PE", estado: "Pernambuco" },
  { uf: "PI", estado: "Piauí" },
  { uf: "RJ", estado: "Rio de Janeiro" },
  { uf: "RN", estado: "Rio Grande do Norte" },
  { uf: "RS", estado: "Rio Grande do Sul" },
  { uf: "RO", estado: "Rondônia" },
  { uf: "RR", estado: "Roraima" },
  { uf: "SC", estado: "Santa Catarina" },
  { uf: "SP", estado: "São Paulo" },
  { uf: "SE", estado: "Sergipe" },
  { uf: "TO", estado: "Tocantins" },
];

const clientes = [
  {
    id: 1,
    nome: "João da Silva",
    cpf: "123.456.789-00",
  },
  {
    id: 2,
    nome: "Maria da Silva",
    cpf: "123.456.789-00",
  },
  {
    id: 3,
    nome: "José da Silva",
    cpf: "123.456.789-00",
  },
  {
    id: 4,
    nome: "Joana da Silva",
    cpf: "123.456.789-00",
  },
];

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/cadastro", (req, res) => {
  auth = true;
  res.render("cadastro_cliente", { auth, estados });
});

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.get("/listagem", (req, res) => {
  auth = true;
  res.render("listagem_clientes", { auth, clientes });
});

module.exports = router;
