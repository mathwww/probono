const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../database/models/User');
const Process = require('../database/models/Process');
const Progress = require('../database/models/Progress');
const connectionString = process.env.DATABASE_URL;

const connection = new Sequelize(connectionString || dbConfig);

User.init(connection);
Process.init(connection);
Progress.init(connection);

Process.associate(connection.models);
Progress.associate(connection.models);

module.exports = connection;