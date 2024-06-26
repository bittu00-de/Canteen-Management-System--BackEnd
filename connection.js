const mysql = require('mysql');
require('dotenv').config()

var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (!err) {
        console.log("Connected to Database & server Running on localhost://8080");
    }
    else {
        console.log(err);
    }
});

module.exports = connection;