const express = require('express');
const routes = express.Router();

const cnabHeader = require('../controller/cnabHeader');

routes.post('cnabHeader', cnabHeader.store);

module.exports = routes;