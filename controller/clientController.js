const Clients = require("../models/Clients");

module.exports = class ClientController {
  static novoClient(req, res) {
    res.render("cadastroCliente");
  }

  static async novoClientSave(req, res) {
    const cliente = {
      name: req.body.nome_cliente,
      cpf: req.body.cpf_cliente,
      phone: req.body.celular,
      address: {
        street: req.body.rua,
        number: req.body.numero,
        neighborhood: req.body.bairro,
        city: req.body.cidade,
        state: req.body.estado,
      },
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
