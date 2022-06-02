import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
console.log(process.env.SQL_NAME_DATABASE);
const db = new Sequelize(
  process.env.SQL_NAME_DATABASE,
  process.env.SQL_MAIN,
  process.env.SQL_PASSWORD,
  {
    host: process.env.SQL_NAME_HOST,
    dialect: "mysql",
  }
);

export default db;
