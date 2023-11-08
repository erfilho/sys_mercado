const Users = require("../models/Users");
const Sales = require("../models/Sales");
const Clients = require("../models/Clients");
const Products = require("../models/Products");
const Category = require("../models/Category");
const Sequelize = require("sequelize");

module.exports = class SalesController {
  static async novaVenda(req, res) {
    try {
      const clients = await Clients.findAll({
        raw: true,
        where: { UserId: req.session.userid },
        order: [["name", "ASC"]],
        include: [
          {
            model: Users,
            required: true,
          },
        ],
      });
      const products = await Products.findAll({
        raw: true,
        order: [["name", "ASC"]],
      });

      res.render("sales/novaVenda", { clients, products });
    } catch (error) {
      console.log(error);
    }
  }

  static async novaVendaSave(req, res) {
    let dados = req.body;
    let IDs = [];
    let clienteId = parseInt(dados.pop());;
    let valorTotal = parseFloat(dados.pop());
    let venda;
    for (let i = 0; i < dados.length; i++) {
      IDs.push(dados[i].id);
    }

    try {
      let produtoVenda = await Products.findAll({
        where: {
          id: IDs
        }
      });

      async function getCategoryName(id) {
        let cateroria = await Category.findOne({
          where: {
            id: id
          }
        });
        return cateroria.name;
      }

      produtoVenda = await Promise.all(produtoVenda.map(async item => {
        let category = await getCategoryName(parseInt(item.category));
        return {
          ...item.dataValues,
          quantidadeVenda: dados.find(dado => dado.id == item.id).quantidade,
          subtotal: dados.find(dado => dado.id == item.id).subtotal,
          categoryName: category
        }
      }));

      venda = {
        value: valorTotal,
        products: produtoVenda,
        ClientId: clienteId,
        UserId: req.session.userid,
      };
      await Sales.create(venda);
      for (let i = 0; i < produtoVenda.length; i++) {
        await Products.update({
          stock: Sequelize.literal(`CASE WHEN stock >= ${produtoVenda[i].quantidadeVenda} THEN stock - ${produtoVenda[i].quantidadeVenda} ELSE 0 END`),
        }, {
          where: { id: produtoVenda[i].id }
        });
      }
      res.redirect("/vendas/");
    } catch (error) {
      console.error('Erro ao cadastrar venda:', error);
    }

  }

  static async produtosVenda(req, res) {
    try {
      const products = await Sales.findOne({
        where: { id: req.params.id },
        include: [
          {
            model: Clients,
          },
        ],
      });
      res.render("sales/produtosVenda", { products: products.dataValues });
    } catch (error) {
      console.log(error);
    }

  }

  static async listaVendas(req, res) {
    try {
      const vendas = await Sales.findAll({
        raw: true,
        where: { UserId: req.session.userid },
        include: [
          {
            model: Clients,
          },
        ],
      });
      const clientes = await Clients.findAll({
        raw: true,
        where: { UserId: req.session.userid },
      });
      res.render("sales/listaVendas", {
        vendas,
        clientes,
        userid: req.session.userid,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async editaVenda(req, res) {
    try {
      const venda = await Sales.findOne({
        where: { id: req.params.id, UserId: req.session.userid },
        raw: true,
      });
      res.render("sales/editaVenda", { venda });
    } catch (error) {
      console.log(error);
    }
  }

  static async editaVendaSave(req, res) {
    try {
      const venda = {
        value: req.body.valor,
        UserId: req.body.UserId,
      };
      await Sales.update(venda, {
        where: { id: req.params.id, UserId: req.session.userid },
      })
        .then(res.redirect("/vendas/"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  static async apagaVendaConfirma(req, res) {
    try {
      await Sales.destroy({
        where: { id: req.params.id, UserId: req.session.userid },
      });
      res.redirect("/vendas/");
    } catch (error) {
      console.log(error);
    }
  }
};
