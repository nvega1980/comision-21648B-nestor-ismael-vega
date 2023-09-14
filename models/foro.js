const { sequelize } = require("../database.js");
const { DataTypes } = require("sequelize");

const PostModel = sequelize.define("base_datos", {
  autor: DataTypes.STRING,
  contenido: DataTypes.TEXT,
  image: DataTypes.TEXT,
});

module.exports = { PostModel };
