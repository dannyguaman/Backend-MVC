const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myApp', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;