require("dotenv").config();
const mysql = require("mysql2");

const client = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

module.exports = client.promise();
