const Clients = require("../models/clients");
const estados = require("../public/js/states");

module.exports = class ClientController {
  static novoClient(req, res) {
    console.log(estados);
    res.render("cadastroCliente", { estados });
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

  static async editaCliente(req, res) {
    const cliente = await Clients.findOne({
      where: { id: req.params.id },
      raw: true,
    });
    console.log(cliente);
    res.render("editaCliente", { cliente, estados });
  }
  static async editaClienteSave(req, res) {
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
    await Clients.update(cliente, { where: { id: req.params.id } })
      .then(res.redirect("/clientes/"))
      .catch((err) => console.log(err));
  }

  static async apagaCliente(req, res) {
    const cliente = await Clients.findOne({
      where: { id: req.params.id },
      raw: true,
    });
    console.log(cliente);
    res.render("apagaCliente", { cliente });
  }

  static async apagaClienteConfirma(req, res) {
    await Clients.destroy({ where: { id: req.params.id } })
      .then(res.redirect("/clientes/"))
      .catch((err) => console.log(err));
  }
};
