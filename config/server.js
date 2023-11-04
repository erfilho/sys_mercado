let express = require("express");
let app = express();
const exphbs = require("express-handlebars");
const User = require("../routes/userRouter");
const Vendas = require("../routes/vendaRouter");
const Clients = require("../routes/clientsRouter");
const Products = require("../routes/productsRouter");
const Categories = require("../routes/categoryRouter");
const conn = require("../db/conn");
const helpers = require("handlebars-helpers")();
const flash = require("express-flash");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

// CONFIGURANDO SESSÃO
app.use(
  session({
    name: "session",
    secret: "johnsennaaaaaaaaaaaaaaaaaaaaa",
    resave: true,
    saveUninitialized: true,
    store: new FileStore({
      logFn: function () {},
      path: require("path").join(require("os").tmpdir(), "sessions"),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

app.use(flash());

// CONFIGURANDO SESSÃO PARA O RES
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }
  next();
});

// CONFIGURANDO O HANDLEBARS
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// CONFIGURANDO O HANDLEBARS PARTIALS
const hbs = exphbs.create({
  helpers: helpers,
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
app.use("/categorias", Categories);

// CONFIGURANDO AS ROTAS
app.get("/", (req, res) => {
  if (req.session.user) {
    console.log(req.session.user)
    res.render("dashboard");
  } else {
    res.render("home");
  }
});

// CONFIGURANDO A ROTA DE LOGIN
app.get("/login", (req, res) => {
  res.render("login");
});

// CONFIGURANDO O 404
app.use(function (req, res) {
  res.status(404).render("404");
});

module.exports = app;
