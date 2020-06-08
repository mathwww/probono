module.exports = {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    database: process.env.DATABASE_NAME || 'probono',
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'probono',
    port: 5432,
    define: {
        timestamps: true
    },
};