const express = require("express");
const SalesController = require("../controller/salesController");

const router = express.Router();

// isso é para vim do banco, o formato que qur ver se modifica ainda
dados = [
  {
    id: 1,
    vendedor: "João",
    cliente: "Maria",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 2,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 3,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 4,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 5,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 6,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 7,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 8,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 9,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 10,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: 1,
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 11,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 12,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: 1,
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 13,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 14,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: 1,
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 15,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 16,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 17,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 18,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
  {
    id: 19,
    vendedor: "Pedro",
    cliente: "avulso",
    produtos: [
      {
        id: 1,
        nome: "Produto A",
        quantidade: 10,
        valorUnitario: 25.0,
        valorTotal: 250.0,
      },
      {
        id: 2,
        nome: "Produto B",
        quantidade: 5,
        valorUnitario: 15.0,
        valorTotal: 75.0,
      },
      {
        id: 3,
        nome: "Produto C",
        quantidade: 8,
        valorUnitario: 30.0,
        valorTotal: 240.0,
      },
    ],
    valor_total: 100,
    data_venda: "01/01/2021",
  },
];

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
