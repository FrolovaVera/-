//подключение бд
const Sequelize = require('sequelize');
module.exports = new Sequelize('bank_bd', 'superuser', 'password', {
    host: 'localhost',
    dialect: 'mssql',
});
