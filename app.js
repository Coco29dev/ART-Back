const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const tableauRoutes = require('./routes/v1/tableauRoute');


const app = express();

app.use(cors())
app.use(express.json());

app.use('/api/v1/tableau', tableauRoutes);


sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronisé');
}).catch(error => {
  console.error('Erreur synchronisation de la database', error);
});


module.exports = app;