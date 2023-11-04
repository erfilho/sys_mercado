const Users = require("../models/Users");
const Sales = require("../models/Sales");
const Clients = require("../models/Clients");

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
      console.log(clients);
      res.render("sales/novaVenda", { clients });
    } catch (error) {
      console.log(error);
    }
  }

  static async novaVendaSave(req, res) {
    try {
      const venda = {
        value: req.body.value,
        ClientId: req.body.ClienteId,
        UserId: req.session.userid,
      };
      console.log(venda);
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
            model: Clients,
          },
        ],
      });
      const clientes = await Clients.findAll({
        raw: true,
        where: { UserId: req.session.userid },
      });
      console.log("VENDA", JSON.stringify(vendas));
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
