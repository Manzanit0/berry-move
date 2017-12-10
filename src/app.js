'use strict';

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'); //Parse JSON in body request

// Express configuration.
const app = express();
app.use(bodyParser.json());

require('./endpoints/routes.js')(app);

 // Server configuration.
const config = require('./config/server.config');

 // Init app.
app.listen(config.port, () => console.log('Berry-Move listening on port ' + config.port + '!\n'));

module.exports = { app };