require('dotenv').config()
// Import DataSource from TypeORM
const { DataSource } = require('typeorm');

// Create an instance of DataSource for TypeORM
const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../entity/*.js'],
    synchronize: true, 
});

module.exports = AppDataSource