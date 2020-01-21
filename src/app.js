const https = require('https');
const express = require('express');
const status = require('http-status');
const mongoose = require('mongoose');

const cnabRoute = require('./routes/cnabRoutes');
const cnabHeaderRoutes = require('./routes/cnabHeaderRoutes');
const sequelize = require ('./database/database');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://gdonadon:gu@1993@cluster0-tezm2.gcp.mongodb.net/share-thoughts?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// sequelize.sync({force: false}).then(() => {
//     const port = process.env.PORT || 3000;

//     app.set("port", port);

//     const server = https.createServer(app);

//     server.listen(port);

// });

app.use(cnabHeaderRoutes);
app.listen(3333);