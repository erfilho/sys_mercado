const Users = require("../models/Users");
const Sales = require("../models/Sales");

module.exports = class SalesController {
  static novaVenda(req, res) {
    res.render("sales/novaVenda");
  }

  static async novaVendaSave(req, res) {
    try {
      const venda = {
        value: req.body.valor,
        UserId: req.session.userid,
      };
      await Sales.create(venda);
      res.redirect("/vendas/");
    } catch (err) {
      console.log(err);
    }
  }

  static async listaVendas(req, res) {
    try {
      const vendas = await Sales.findAll({
        raw: true,
        where: { UserId: req.session.userid },
        include: [
          {
            model: Users,
            required: true,
          },
        ],
      });
      res.render("sales/listaVendas", { vendas });
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
