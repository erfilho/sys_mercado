const Clients = require("../models/clients");

module.exports = class ClientController {
  static novoClient(req, res) {
    res.render("cadastroCliente");
  }

  static async novoClientSave(req, res) {
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
    };
    console.log(cliente);
    await Clients.create(cliente);
    res.redirect("/clientes/");
  }

  static async listaClientes(req, res) {
    const clientes = await Clients.findAll({ raw: true });
    console.log(clientes);
    res.render("listaClientes", { clientes });
  }
};
