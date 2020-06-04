const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../database/models/User');

const realConfig = process.env.DATABASE_URI || dbConfig;

const connection = new Sequelize(realConfig);

User.init(connection);

module.exports = connection;