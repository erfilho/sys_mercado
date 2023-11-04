const Users = require("../models/Users");
const cards = require("../public/js/cards");

module.exports = class UserController {
  static loginUser(req, res) {
    res.render("users/login");
  }

  static logoutUser(req, res) {
    req.session.destroy();
    res.redirect("/");
  }

  static async loginUserCheck(req, res) {
    try {
      const { user, password } = req.body;
      const userActual = await Users.findOne({ where: { user: user } });
      if (!userActual) {
        req.flash("message", "Usuário ou senha incorretos");
        res.render("users/login");
        return;
      }
      if (userActual.password != password) {
        req.flash("message", "Usuário ou senha incorretos");
        res.render("users/login");
        return;
      }
      req.session.userid = userActual.id;
      req.session.user = userActual.name;
      req.flash("message", "Login efetuado com sucesso");
      req.session.save(() => {
        res.redirect("/");
      });
    } catch (error) {
      console.log(error);
    }
  }

  static novoUser(req, res) {
    res.render("users/cadastroUser");
  }

  static async novoUserSave(req, res) {
    try {
      const user = {
        user: req.body.usuario,
        name: req.body.nome_usuario,
        cpf: req.body.cpf_usuario,
        password: req.body.senha_usuario,
      };
      await Users.create(user);
      req.flash("message", "Usuário cadastrado com sucesso");
      req.session.save(() => {
        res.redirect("/");
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async editaUser(req, res) {
    try {
      const user = await Users.findOne({
        where: { id: req.session.userid },
        raw: true,
      });
      console.log(user);
      res.render("users/editaUser", { user });
    } catch (error) {
      console.log(error);
    }
  }

  static async editaUserSave(req, res) {
    const user = {
      user: req.body.usuario,
      name: req.body.nome_usuario,
      cpf: req.body.cpf_usuario,
      password: req.body.senha_usuario,
    };
    await Users.update(user, { where: { id: req.session.userid } })
      .then(res.redirect("/"))
      .catch((err) => console.log(err));
  }
};
