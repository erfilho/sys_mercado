const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sys_mercado", "devJs", "123456", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Failed to connect with database:", error);
}

module.exports = sequelize;
