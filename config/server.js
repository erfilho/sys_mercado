let express = require("express");
let app = express();
let consign = require("consign");
const session = require("express-session");
const exphbs = require("express-handlebars");
const User = require("../routes/userRouter");
const Vendas = require("../routes/vendaRouter");
const Clients = require("../routes/clientsRouter");
const Products = require("../routes/productsRouter");
const flash = require("connect-flash");
const FileStore = require("session-file-store")(session);

// CONFIGURANDO SESSÃO
app.use(
  session({
    name: "session",
    secret: "myCat",
    resave: true,
    saveUninitialized: true,
    store: new FileStore({
      logFn: function () {},
      path: require("path").join(require("os").tmpdir(), "sessions"),
    }),
    cookie: {
      secure: false,
      maxAge: 32000,
      expires: 36000,
      httpOnly: true,
    },
  })
);

// CONFIGURANDO SESSÃO PARA O RES
app.use((req, res, next) => {
  console.log(req.session.userid);
  if (req.session.userid) {
    res.locals.user = req.session.userid;
  }
  next();
});

app.use(flash());
// MIDDLEWARE
app.use((req, res, next) => {
  res.locals.sucess_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// CONFIGURANDO O HANDLEBARS
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// CONFIGURANDO O HANDLEBARS PARTIALS
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

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
