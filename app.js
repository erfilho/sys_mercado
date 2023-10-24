const express = require('express');
let app = require("./config/server");

app.use(express.static('public'));

app.listen(3000, () => {
  console.log("Servidor Online!");
  console.log("Link para acesso: http://localhost:3000");
});
