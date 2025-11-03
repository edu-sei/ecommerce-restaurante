const express = require('express');
require('dotenv').config();
// const checkAPK = require('./Middleware/apiAuth');


const UserRoute = require('./Routes/UserRoute');
const CategoryRoute = require('./Routes/CategoryRoute');
const ProductRoute = require('./Routes/ProductRoute');

const api = express();

api.use(express.json());
// api.use(express.urlencoded({ extended: true })); // Permite leer datos enviados desde formularios (req.body). Convierte x-www-form-urlencoded a un objeto JavaScript.


api.use('/api/Users', UserRoute);

api.use('/api/Category', CategoryRoute);

api.use('/api/Products', ProductRoute);



module.exports = api;