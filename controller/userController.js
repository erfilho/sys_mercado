const Users = require("../models/Users");

module.exports = class UserController {
  static novoUser(req, res) {
    res.render("cadastroCliente");
  }

  static async novoUserSave(req, res) {
    const user = {
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
    console.log(user);
    await Users.create(user);
    res.redirect("/users/");
  }

  static async listaUsers(req, res) {
    const users = await Users.findAll({ raw: true });
    console.log(users);
    res.render("users", { users });
  }

  static async editaUser(req, res) {
    const user = await Users.findOne({
      where: { id: req.params.id },
      raw: true,
    });
    res.render("editaUser", { user });
  }

  static async editaUserSave(req, res) {
    const user = {
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
    await (await Users.update(user, { where: { id: req.params.id } }))
      .then(res.redirect("/users/"))
      .catch((err) => console.log(err));
  }
};
