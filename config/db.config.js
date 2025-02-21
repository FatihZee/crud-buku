const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Tambahkan ini
  dialect: 'mysql',
  logging: false, // Matikan logging SQL agar lebih rapi
});

module.exports = sequelize;
