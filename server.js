require('dotenv').config()
// Import express
const express = require('express');
// Import DataSource from TypeORM
const { DataSource } = require('typeorm');
const PORT = process.env.PORT || 3000;
const app = express();

// Create an instance of DataSource for TypeORM
const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Initialize Database connection
AppDataSource.initialize()
    .then(() => {
        console.log('Connection to Mysql database successful');
    })
    .catch((error) => {
        console.log('Error connecting to database', error);
    });

// Use the express json bodyparser 
app.use(express.json());

// Connect to our server
app.listen(PORT, () => {
    console.log(`Server is runnning on PORT: ${PORT}`)
})