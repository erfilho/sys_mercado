const express = require("express");
const cards = require("../public/js/cards");
const UserController = require("../controller/userController");
const router = express.Router();

router.get("/login", UserController.loginUser);
router.post("/login", UserController.loginUserCheck);
router.get("/logout", UserController.logoutUser);
router.get("/add", UserController.novoUser);
router.post("/add", UserController.novoUserSave);
router.get("/edit/:id", UserController.editaUser);
router.post("/edit/:id", UserController.editaUserSave);

//CONFIGURANDO LOGOUT
router.get("/", (req, res) => {
  try {
    if (req.session.user) {
      res.render("index", { cards });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
