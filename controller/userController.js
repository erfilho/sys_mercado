const Users = require("../models/Users");

module.exports = class UserController {
  static novoUser(req, res) {
    res.render("cadastroUser");
  }

  static async novoUserSave(req, res) {
    console.log("salva user");
    const user = {
      user: req.body.usuario,
      name: req.body.nome_usuario,
      cpf: req.body.cpf_usuario,
      password: req.body.senha_usuario,
    };
    console.log(req.body);
    await Users.create(user);
    res.redirect("/");
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
      user: req.body.usuario,
      name: req.body.nome_usuario,
      cpf: req.body.cpf_usuario,
      password: req.body.senha_usuario,
    };
    await (await Users.update(user, { where: { id: req.params.id } }))
      .then(res.redirect("/users/"))
      .catch((err) => console.log(err));
  }
};
