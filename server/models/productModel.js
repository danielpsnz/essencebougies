const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');  // Assuming you have a database connection

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Product;