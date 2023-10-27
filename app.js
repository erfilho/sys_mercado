const express = require("express");
const conn = require("./db/conn");
const app = require("./config/server");
require("dotenv").config();

app.use(express.static("public"));

conn
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Click here: http://localhost:3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
