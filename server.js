// Import express
const express = require('express');
const AppDataSource = require('./config/dbConfig');

const PORT = process.env.PORT || 3000;
const app = express();

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