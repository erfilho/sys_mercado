const { DataTypes } = require("sequelize");
const Users = require("./Users");
const db = require("../db/conn");

const Category = db.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.belongsTo(Users);
Users.hasMany(Category);

module.exports = Category;
