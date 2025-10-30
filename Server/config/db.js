const mysql = require("mysql2");
require('dotenv').config();

const credenciales = {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
};

const db = mysql.createPool(credenciales);

module.exports = db.promise();