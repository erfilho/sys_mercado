const express = require("express");
const cards = require("../public/js/cards");
const UserController = require("../controller/userController");
const router = express.Router();

router.get("/add", UserController.novoUser);
router.post("/add", UserController.novoUserSave);
router.get("/", UserController.listaUsers);
router.get("/edit/:id", UserController.editaUser);
router.post("/edit/:id", UserController.editaUserSave);

var auth = false;
const usuario = {
  login: "admin",
  senha: "admin",
};

// CONFIGURANDO A AUTENTICAÇÃO DE USUÁRIO
router.post("/login", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  let message = "";
  if (usuario.login === user && usuario.senha === password) {
    auth = true;
    message = "Login efetuado com sucesso!";
    res.render("paginaPrincipal", { usuario, auth, message, cards });
  } else {
    auth = false;
    message = "Usuário e/ou senha inválidos!";
    res.render("login", { auth, message });
  }
});

//CONFIGURANDO LOGOUT
router.get("/logout", (req, res) => {
  auth = false;
  res.render("login", { auth });
});

module.exports = router;
