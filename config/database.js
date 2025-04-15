const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.db',
  logging: false,
});

const Connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection à la database établie');
  } catch (error) {
    console.error('Impossible de se connecter à la database:', error);
  }
};

Connection();

module.exports = sequelize;