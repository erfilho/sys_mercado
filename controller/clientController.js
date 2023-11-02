const Clients = require("../models/clients");
const Users = require("../models/Users");
const estados = require("../public/js/states");

module.exports = class ClientController {
  static novoClient(req, res) {
    console.log(estados);
    res.render("clientes/cadastroCliente", { estados });
  }

  static async novoClientSave(req, res) {
    try {
      const users = await Users.findAll({ raw: true });
      const cliente = {
        name: req.body.nome_cliente,
        cpf: req.body.cpf_cliente,
        phone: req.body.celular,
        street: req.body.endereco,
        number: req.body.numero,
        neighbourhood: req.body.bairro,
        additional_info: req.body.complemento,
        city: req.body.cidade,
        state: req.body.estado,
        UserId: req.session.user.id,
      };
      await Clients.create(cliente);
      res.redirect("/clientes/");
    } catch (error) {
      console.log(error);
    }
  }

  static async listaClientes(req, res) {
    try {
      const clientes = await Clients.findAll({
        raw: true,
        where: { UserId: req.session.user.id },
        include: [
          {
            model: Users,
            required: true,
          },
        ],
      });
      res.render("clientes/listaClientes", { clientes });
    } catch (error) {
      console.log(error);
    }
  }

  static async editaCliente(req, res) {
    try {
      const cliente = await Clients.findOne({
        where: { id: req.params.id },
        raw: true,
      });
      const users = await Users.findOne({
        where: { id: req.session.user.id },
      });
      res.render("clientes/editaCliente", { cliente, estados });
    } catch (error) {
      console.log(error);
    }
  }
  static async editaClienteSave(req, res) {
    try {
      const cliente = {
        name: req.body.nome_cliente,
        cpf: req.body.cpf_cliente,
        phone: req.body.celular,
        street: req.body.endereco,
        number: req.body.numero,
        neighbourhood: req.body.bairro,
        additional_info: req.body.complemento,
        city: req.body.cidade,
        state: req.body.estado,
        UserID: req.body.UserID,
      };
      await Clients.update(cliente, { where: { id: req.params.id } })
        .then(res.redirect("/clientes/"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  static async apagaClienteConfirma(req, res) {
    await Clients.destroy({ where: { id: req.params.id } })
      .then(res.redirect("/clientes/"))
      .catch((err) => console.log(err));
  }
};
