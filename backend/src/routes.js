const express = require('express');

// import de controllers

const routes = express.Router();

// rotas aqui
routes.get('/', function(req, res) {
    return res.json("Hello World !");
});

module.exports = routes;