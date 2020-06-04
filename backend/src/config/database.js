module.exports = process.env.DATABASE_URL || {
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