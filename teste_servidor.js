let express = require("express");
const { db } = require("./firebase");
let app = express();
const port = 3000;

// CONFIGURANDO A PASTA DOS ARQUIVOS ESTÁTICOS
app.use(express.static("public"));

// CONFIGURANDO O PARSER
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/usuarios", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Servidor Online!");
  console.log("Link para acesso: http://localhost:3000");
});
