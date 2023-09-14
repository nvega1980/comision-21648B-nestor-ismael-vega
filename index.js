require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./database.js");
const mysql = require("mysql2"); 
const { patch } = require("../server/router/notas.routes.js");
const helmet = require("helmet")
const puerto = process.env.PORT

require("./models/foro.js");


const app = express();

// middleweres
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//rutas
app.use("/foro", require("../server/router/notas.routes.js"))

//config
app.listen(puerto,()=> {
        sequelize.sync({force: false});
        
    console.log("Server activo en puerto "+ puerto);
})