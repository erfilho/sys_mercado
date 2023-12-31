const Products = require("../models/Products");
const Category = require("../models/Category");
const Users = require("../models/Users");
const { Op } = require("sequelize");

module.exports = class ProductController {
  static async novoProduto(req, res) {
    try {
      const categorias = await Category.findAll({
        raw: true,
        where: { UserId: req.session.userid },
        order: [["name", "ASC"]],
      });
      console.log(categorias);
      res.render("produtos/cadastroProduto", { categorias });
    } catch (error) {
      console.log(error);
    }
  }

  static async novoProdutoSave(req, res) {
    try {
      const produto = {
        cod: req.body.cod_produto,
        name: req.body.nome_produto,
        category: req.body.categoria_produto,
        value: req.body.valor_produto,
        stock: req.body.estoque_produto,
        description: req.body.descricao_produto,
        UserId: req.session.userid,
      };
      await Products.create(produto);
      res.redirect("/produtos/");
    } catch (error) {
      console.log(error);
    }
  }

  static async listaEstoqueProdutos(req, res) {
    try {
      const produtos = await Products.findAll({
        raw: true,
        where: { UserId: req.session.userid },
        include: [
          {
            model: Users,
            required: true,
          },
        ],
      });
      const categorias = await Category.findAll({
        raw: true,
        where: { UserId: req.session.userid },
        order: [["name", "ASC"]],
      });
      res.render("produtos/listaProdutosEstoque", { produtos, categorias });
    } catch (error) {
      console.log(error);
    }
  }

  static async editaProduto(req, res) {
    const produto = await Products.findOne({
      raw: true,
      where: { id: req.params.id, UserId: req.session.userid },
    });
    const categorias = await Category.findAll({
      raw: true,
      where: { UserId: req.session.userid },
      order: [["name", "ASC"]],
    });
    res.render("produtos/editaProduto", { produto, categorias });
  }

  static async editaProdutoSave(req, res) {
    try {
      const produto = {
        cod: req.body.cod_produto,
        name: req.body.nome_produto,
        category: req.body.categoria_produto,
        value: req.body.valor_produto,
        stock: req.body.estoque_produto,
        description: req.body.descricao_produto,
        UserId: req.session.userid,
      };
      await Products.update(produto, {
        where: { id: req.params.id, UserId: req.session.userid },
      })
        .then(res.redirect("/produtos/"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  static async apagaProdutoConfirma(req, res) {
    await Products.destroy({
      where: { id: req.params.id, UserId: req.session.userid },
    })
      .then(res.redirect("/produtos/"))
      .catch((err) => console.log(err));
  }

  static async countProducts(req, res) {
    try {
      await Products.count({
        where: { UserId: req.session.userid },
      })
        .then((count) => {
          res.send({ count });
          console.log(count);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  static async searchProduct(req, res) {
    try {
      const categorias = await Category.findAll({
        raw: true,
        where: { UserId: req.session.userid },
        order: [["name", "ASC"]],
      });

      let produtos = "";
      console.log("Prod", req.body.prod_search.lenght);
      console.log("Cat", req.body.categoria_produto);

      // category: req.body.categoria_produto,
      if (req.body.categoria_produto == "*" && req.body.prod_search == "") {
        produtos = await Products.findAll({
          raw: true,
          where: {
            UserId: req.session.userid,
          },
          include: [
            {
              model: Users,
              required: true,
            },
          ],
        });
      }
      if (req.body.prod_search != "" && req.body.categoria_produto != "*") {
        produtos = await Products.findAll({
          raw: true,
          where: {
            UserId: req.session.userid,
            name: {
              [Op.like]: `%${req.body.prod_search}%`,
            },
            category: req.body.categoria_produto,
          },
          include: [
            {
              model: Users,
              required: true,
            },
          ],
        });
      }
      if (req.body.prod_search != "" && req.body.categoria_produto == "*") {
        produtos = await Products.findAll({
          raw: true,
          where: {
            UserId: req.session.userid,
            name: {
              [Op.like]: `%${req.body.prod_search}%`,
            },
          },
          include: [
            {
              model: Users,
              required: true,
            },
          ],
        });
      }
      if (req.body.prod_search == "" && req.body.categoria_produto != "*") {
        produtos = await Products.findAll({
          raw: true,
          where: {
            UserId: req.session.userid,
            category: req.body.categoria_produto,
          },
          include: [
            {
              model: Users,
              required: true,
            },
          ],
        });
      }
      res.render("produtos/listaProdutosEstoque", { produtos, categorias });
    } catch (error) {
      console.log(error);
    }
  }
};
