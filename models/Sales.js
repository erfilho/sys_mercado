const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const Users = require("./Users");
const Clients = require("./Clients");

const Sales = db.define("Sales", {
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  products: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
});

// Relacionamento venda-cliente
Clients.hasMany(Sales);
Sales.belongsTo(Clients);

// Relacionamento venda-usuário
Sales.hasOne(Users);
Users.hasMany(Sales);

module.exports = Sales;
