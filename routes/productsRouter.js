const express = require("express");
const router = express.Router();
const ProductController = require("../controller/productController");

router.get("/", ProductController.listaEstoqueProdutos);
router.get("/add", ProductController.novoProduto);
router.post("/add", ProductController.novoProdutoSave);
router.get("/edit/:id", ProductController.editaProduto);
router.post("/edit/:id", ProductController.editaProdutoSave);
router.post("/delete/:id", ProductController.apagaProdutoConfirma);
router.get("/search", ProductController.searchProduct);
router.get("/cnt_produtos", ProductController.countProducts);

module.exports = router;
