const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

// Define the Book model
const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: false
});

module.exports = Book;
