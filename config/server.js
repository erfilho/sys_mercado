let express = require("express");
let app = express();
let consign = require("consign");
const exphbs = require("express-handlebars");
const User = require("../routes/userRouter");
const Vendas = require("../routes/vendaRouter");
const Clients = require("../routes/clientsRouter");
const Products = require("../routes/productsRouter");

// CONFIGURANDO O HANDLEBARS
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

// CONFIGURANDO O HBS
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");



// CONFIGURANDO A PASTA DOS ARQUIVOS ESTÁTICOS
app.use(express.static("public"));

// CONFIGURANDO O PARSER
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// CONFIGURANDO O USO DAS ROTAS
app.use("/users", User);
app.use("/clientes", Clients);
app.use("/produtos", Products);
app.use("/vendas", Vendas);

// CONFIGURANDO AS ROTAS
app.get("/", (req, res) => {
  res.render("home");
});

// CONFIGURANDO A ROTA DE LOGIN
app.get("/login", (req, res) => {
  res.render("login");
});

// CONFIGURANDO O 404
app.use(function (req, res) {
  res.status(404).render("404");
});

consign().then("/config/dbConnection.js").then("/models").into(app);

module.exports = app;
