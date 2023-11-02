const { DataTypes } = require("sequelize");
const Users = require("./Users");
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
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  neighbourhood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  additional_info: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Clients.belongsTo(Users);
Users.hasMany(Clients);

module.exports = Clients;
