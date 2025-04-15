const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const Tableau = sequelize.define('Tableau', {

  uuid: {
    type: DataTypes.UUIDV4,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
  },

  url: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    validate: {
      isUrl: true,
    }
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },

  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    required: true,
  },

});

module.exports = Tableau;