const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');
const User = require('./user.model');
const Subject = require('./subject.model');

const Enrollment = sequelize.define('Enrollment', {
  enrollmentDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, //fecha actual será el valor por default
    allowNull: false
  }
});

// Definición de relación muchos a muchos 
User.belongsToMany(Subject, { through: Enrollment });
Subject.belongsToMany(User, { through: Enrollment });

// Definición de relaciones uno a muchos para cargar con `include` en el controlador
Enrollment.belongsTo(User, { foreignKey: 'UserId' });
Enrollment.belongsTo(Subject, { foreignKey: 'SubjectId' });

module.exports = Enrollment;
