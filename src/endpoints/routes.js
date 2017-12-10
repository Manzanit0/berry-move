'use strict';

const app = require('express');

const metadata = require('./metadata.endpoint.js');

const routes = (app) => {
    app.use('/metadata', metadata);
};

module.exports = routes;