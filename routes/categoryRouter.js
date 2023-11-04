const express = require("express");
const cards = require("../public/js/cards");
const CategoryController = require("../controller/categoryController");
const router = express.Router();

router.get("/", CategoryController.listaCategorias);
router.get("/add", CategoryController.novaCategoria);
router.post("/add", CategoryController.novaCategoriaSave);
router.get("/edit/:id", CategoryController.editaCategoria);
router.post("/edit/:id", CategoryController.editaCategoriaSave);

module.exports = router;
