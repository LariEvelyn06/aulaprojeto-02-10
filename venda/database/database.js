const Sequelize = require("sequelize");

const connection = new Sequelize('larissa',
'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;