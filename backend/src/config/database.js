const fs = require('fs');

module.exports = {
  development: {
    username: 'postgres',
    password: 'probono',
    database: 'probono',
    host: 'localhost',
    dialect: 'postgres'
  },
  production: {
    username: 'spexsorxokqacz',
    password: '15f7dc77361f048850fb0b48df440c4ec826a7f25e4a6d9bab19d31e673b1648',
    database: 'dc6m2sqkfgsit6',
    host: 'ec2-3-222-150-253.compute-1.amazonaws.com',
    dialect: 'postgres',
  }
};

/*
module.exports = { 
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
}|| {
    dialect: 'postgres',
    host: 'localhost',
    database: 'probono',
    username: 'postgres',
    password: 'probono',
    port: 5432,
    define: {
        timestamps: true
    },
};
*/