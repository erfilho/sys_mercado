const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Products = db.define("Products", {
  cod: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Products;
