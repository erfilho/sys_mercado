const Products = require("../models/Products");

module.exports = class ProductController {
  static novoProduto(req, res) {
    res.render("produtos/cadastroProduto");
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
    res.render("produtos/listaProdutosEstoque", { produtos });
  }

  static async editaProduto(req, res) {
    const produto = await Products.findByPk(req.params.id, { raw: true });
    res.render("produtos/editaProduto", { produto });
  }

  static async editaProdutoSave(req, res) {
    const produto = {
      cod: req.body.cod_produto,
      name: req.body.nome_produto,
      category: req.body.categoria_produto,
      localization: req.body.localizacao_produto,
      value: req.body.valor_produto,
      stock: req.body.estoque_produto,
      description: req.body.descricao_produto,
    };
    await Products.update(produto, { where: { id: req.params.id } })
      .then(res.redirect("/produtos/"))
      .catch((err) => console.log(err));
  }

  static async apagaProdutoConfirma(req, res) {
    await Products.destroy({ where: { id: req.params.id } })
      .then(res.redirect("/produtos/"))
      .catch((err) => console.log(err));
  }
};
