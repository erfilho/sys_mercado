const express = require("express");
const router = express.Router();
const ProductController = require("../controller/productController");

router.get("/", ProductController.listaEstoqueProdutos);
router.get("/add", ProductController.novoProduto);
router.post("/add", ProductController.novoProdutoSave);

module.exports = router;
