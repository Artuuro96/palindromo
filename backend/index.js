const body_parser = require("body-parser");
const obtener_palindromos = require("./obtener_palindromos");
const express = require("express");
const app = express();

app.use("/public", express.static("../frontend/dist"));

app.use(body_parser.json());

app.get('/api/obtener/palindromos', obtener_palindromos)
   
app.listen(3000)

console.log("Servidor iniciado en el puerto 3000")

