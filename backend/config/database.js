const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const db = new Sequelize(
  process.env.SQL_NAME_DATABASE,
  process.env.SQL_MAIN,
  process.env.SQL_PASSWORD,
  {
    host: process.env.SQL_NAME_HOST,
    dialect: "mysql",
  }
);

module.exports = db;
