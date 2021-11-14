const Sequelize = require('sequelize');

require('dotenv').config();

<<<<<<< HEAD
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
=======

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
>>>>>>> 57223f0b608ddc28ed2f14004576b81afd01bd36
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
<<<<<<< HEAD
=======

module.exports = sequelize;

>>>>>>> 57223f0b608ddc28ed2f14004576b81afd01bd36








module.exports = sequelize;
