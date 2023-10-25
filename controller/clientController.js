const clients = require("../models/Clients");

module.exports = class ClientController {
  static newClient(req, res) {
    res.render("cadastro_cliente");
  }

  static async newClientSave(req, res) {
    const cliente = {
      name: req.body.nome_cliente,
      cpf: req.body.cpf_cliente,
      phone: req.body.celular,
      address: req.body.endereco,
    };
    await clients.create(cliente);
    res.redirect("/clientes");
  }
};
