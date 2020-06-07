const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../database/models/User');
const Process = require('../database/models/Process');
const Progress = require('../database/models/Progress');
const Role = require('./models/Role');
const connectionString = process.env.DATABASE_URL;

const connection = new Sequelize(connectionString || dbConfig);

User.init(connection);
Process.init(connection);
Progress.init(connection);
Role.init(connection);

// Process.associate(connection.models);
// Progress.associate(connection.models);
Progress.belongsTo(Process);
Process.hasMany(Progress);
// Role.associate(connection.models);
// User.associate(connection.models);
Role.belongsTo(User);
User.hasOne(Role);

module.exports = connection;