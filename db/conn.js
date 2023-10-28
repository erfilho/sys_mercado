require("dotenv").config();

const { Sequelize } = require("sequelize");
const [db, host, user, password, dialect] = [
  process.env.DB_NAME,
  process.env.DB_HOST,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_DIALECT,
];

console.log(db, host, user, password);

const sequelize = new Sequelize(db, user, password, {
  host: host,
  dialect: dialect,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Failed to connect with database:", error);
}

module.exports = sequelize;
