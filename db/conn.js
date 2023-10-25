const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nomeBanco", "usuario", "senha", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Database connected");
} catch (error) {
  console.error("Failed to connect with database:", error);
}

module.exports = sequelize;
