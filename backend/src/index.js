const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);

app.listen(port);