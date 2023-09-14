const { Sequelize } = require("sequelize");
require("dotenv").config();
const usuario = process.env.DB_USUARIO
const password = process.env.DB_PASSWORD
const nombre = process.env.DB_NAME


const sequelize = new Sequelize(nombre, usuario, password, {
    host: "localhost",
    dialect: "mysql",
})

module.exports = { sequelize };

