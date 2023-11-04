const Category = require("../models/Category");
const Users = require("../models/Users");

module.exports = class CategoryController {
  static novaCategoria(req, res) {
    res.render("category/cadastroCategoria");
  }

  static async novaCategoriaSave(req, res) {
    try {
      const categoria = {
        name: req.body.nome_categoria,
        cod: req.body.cod_categoria,
        UserId: req.session.userid,
      };
      console.log(categoria);
      await Category.create(categoria);
      res.redirect("/categorias/");
    } catch (error) {
      console.log(error);
    }
  }

  static async listaCategorias(req, res) {
    try {
      const categorias = await Category.findAll({
        raw: true,
        where: { UserId: req.session.userid },
        include: [
          {
            model: Users,
            required: true,
          },
        ],
      });
      res.render("category/listaCategorias", { categorias });
    } catch (error) {
      console.log(error);
    }
  }

  static async editaCategoria(req, res) {
    try {
      const categoria = await Category.findOne({
        where: { id: req.params.id, UserId: req.session.userid },
        raw: true,
      });
      res.render("category/editaCategoria", { categoria });
    } catch (error) {
      console.log(error);
    }
  }

  static async editaCategoriaSave(req, res) {
    try {
      const categoria = {
        name: req.body.nome_categoria,
        cod: req.body.cod_categoria,
        UserId: req.session.userid,
      };
      await Category.update(categoria, {
        where: { id: req.params.id, UserId: req.session.userid },
      })
        .then(res.redirect("/categorias/"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  static async apagaCategoriaConfirma(req, res) {
    await Category.destroy({ where: { id: req.params.id } })
      .then(res.redirect("/categorias/"))
      .catch((err) => console.log(err));
  }
};
