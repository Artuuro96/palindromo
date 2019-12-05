const body_parser = require("body-parser");
const obtener_palindromos = require("./obtener_palindromos");
const guardar_palindromos = require("./guardar_palindromos");
const consultar_logs = require("./consultar_logs");
const express = require("express");
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(body_parser.json());

app.use("/", express.static("../dist/palindromo"));

app.get('/api/obtener_palindromos', obtener_palindromos);

app.post('/api/guardar_palindromos', guardar_palindromos);

app.get('/api/obtener_log', consultar_logs);

app.all("*", (req, res) => {
    res.status(200).sendFile(`/`, {
        root: "../dist/palindromo"
    })
})
   
app.listen(3000)

console.log("Servidor iniciado en el puerto 3000")

