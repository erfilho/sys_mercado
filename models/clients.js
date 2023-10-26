const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Clients = db.define("Clients", {
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
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

module.exports = Clients;
