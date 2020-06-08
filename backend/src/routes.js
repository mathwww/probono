const express = require('express');

// import de controllers
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ProcessController = require('./controllers/ProcessController');

const routes = express.Router();

// rotas aqui
routes.get('/', function(req, res) {
    return res.json("Hello World !");
});

routes.get('/users', UserController.list);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.create);

routes.get('/processes', ProcessController.index);

module.exports = routes;