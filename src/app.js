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

 // Expose Lightning Design System.
 app.use('/@salesforce-ux', express.static(path.join(__dirname, '../node_modules/@salesforce-ux')));

// Expose frontend and redirect to index.html
app.use('/views', express.static(path.join(__dirname, '/views')));
app.get('/index', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, './views/') }); 
});

 // Init app.
app.listen(config.port, () => console.log('Berry-Move listening on port ' + config.port + '!\n'));

module.exports = { app };