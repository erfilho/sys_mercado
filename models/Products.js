const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const ProductController = require("../controller/productController");
const Users = require("./Users");
const Category = require("./Category");

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
    allowNull: true,
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
    allowNull: true,
  },
});

Products.hasOne(Category);
Products.belongsTo(Users);
Users.hasMany(Products);

module.exports = Products;
