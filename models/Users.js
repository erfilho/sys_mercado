const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Users = db.define("Users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
