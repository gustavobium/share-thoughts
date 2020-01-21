const http = require('http');
const express = require('express');
const status = require('http-status');

const cnabHeaderRoutes = require('./routes/cnabHeaderRoutes');
const sequelize = require ('./database/database');

const app = express();
app.use(express.json());
app.use(cnabHeaderRoutes);

sequelize.sync({force: false}).then(() => {
    const port = process.env.PORT || 3000;

    app.set("port", port);

    const server = http.createServer(app);

    server.listen(port);

});