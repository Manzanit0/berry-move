'use strict';

const app = require('express');

const metadata = require('./metadata.endpoint.js');
const organization = require('./organization.endpoint');

const routes = (app) => {
    app.use('/metadata', metadata);
    app.use('/org', organization);
};

module.exports = routes;