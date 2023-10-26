const Products = require("../models/Products");

module.exports = class ProductController {
  static novoProduto(req, res) {
    res.render("cadastroProduto");
  }

  static async novoProdutoSave(req, res) {
    const produto = {
      cod: req.body.cod_produto,
      name: req.body.nome_produto,
      category: req.body.categoria_produto,
      localization: req.body.localizacao_produto,
      value: req.body.valor_produto,
      stock: req.body.estoque_produto,
      description: req.body.descricao_produto,
    };
    console.log(produto);
    await Products.create(produto);
    res.redirect("/produtos/");
  }

  static async listaEstoqueProdutos(req, res) {
    const produtos = await Products.findAll({ raw: true });
    console.log(produtos);
    res.render("listaProdutosEstoque", { produtos });
  }
};
