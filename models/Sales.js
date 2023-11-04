const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const Users = require("./Users");
const Product = require("./Products");
const Clients = require("./Clients");
const { Client, ClientBase } = require("pg");

const Sales = db.define("Sales", {
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Relacionamento venda-cliente
Clients.hasMany(Sales);
Sales.belongsTo(Clients);
// Relacionamento venda-usuário
Sales.hasOne(Users);
Users.hasMany(Sales);

// Relacionamento venda-produto
Sales.belongsToMany(Product, { through: "SalesProducts" });
Product.belongsToMany(Sales, { through: "SalesProducts" });

module.exports = Sales;
