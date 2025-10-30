const express = require('express');
require('dotenv').config();
const checkAPK = require('./middleware/apiAuth');

const api = express();






module.exports = api;