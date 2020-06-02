const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize('postgres://probono:pROBONO-Dev@localhost5432/probono');

module.exports = connection;