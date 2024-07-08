const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const User = sequelize.define('User', {
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    validate:{
      notNull: { msg: "Id is requiered"}
    }
  },
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
