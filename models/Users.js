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

Users.create({
  name: "Erineldo Filho",
  cpf: "123.456.789-00",
  user: "admin",
  password: "123456",
})
  .then((user) => {
    console.log("User created:", user);
  })
  .catch((error) => {
    console.error("Error creating user:", error);
  });

module.exports = Users;
