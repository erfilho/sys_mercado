const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const clients = db.define("Clients", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

console.log(clients === db.models.Clients);

module.exports = clients;
