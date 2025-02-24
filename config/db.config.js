const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config();

// Debug: Cek apakah env terbaca dengan benar
console.log("🔍 DB Config:");
console.log("Host:", process.env.DB_HOST);
console.log("Port:", process.env.DB_PORT);
console.log("User:", process.env.DB_USER);
console.log("Database:", process.env.DB_NAME);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectModule: mysql2, // Tambahkan ini
  dialectOptions: {
    connectTimeout: 60000,
  },
  logging: false,
});

module.exports = sequelize;
