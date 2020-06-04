const express = require('express');

// import de controllers
const UserController = require('./controllers/UserController');

const routes = express.Router();

// rotas aqui
routes.get('/', function(req, res) {
    return res.json("Hello World !");
});

routes.get('/users', UserController.list);
routes.post('/users', UserController.store);

module.exports = routes;