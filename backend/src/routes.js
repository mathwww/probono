const express = require('express');

// import de controllers
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// rotas aqui
routes.get('/', function(req, res) {
    return res.json("Hello World !");
});

routes.get('/users', UserController.list);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.create);

module.exports = routes;