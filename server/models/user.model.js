const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const User = sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Username is required" }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Email is required" },
      isEmail: { msg: "Invalid email" }
    }
  }
});

module.exports = User;
