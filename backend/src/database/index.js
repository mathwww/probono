const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../database/models/User');
const connectionString = process.env.DATABASE_URL;

const connection = new Sequelize(connectionString || dbConfig);

User.init(connection);

module.exports = connection;