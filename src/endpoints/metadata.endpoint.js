'use strict';
const fs = require('fs');

const express = require('express'),
    router = express.Router(),
    jsforce = require('jsforce-metadata-tools'),
    unzip = require('unzip')

const retrieve = (req, res) => {
    //TODO: move the options to the header.
    const options = {
        username: req.body.username,
        password: req.body.password
    };

    //TODO: the metadata types should come in the body as a JSON.
    jsforce.retrieveByTypes('ApexClass:AccountHandler', options)
        .then(results => {
            fs.writeFileSync('./package.zip', new Buffer(results.zipFile, 'base64'));
            res.send(results);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
    });
};

const deploy = (req, res) => {
    //TODO: just upload the zip to an org?
};

const deployBetweenOrgs = (req, res) => {
    //TODO: simply retrieve + deploy.
};

router.post('/retrieve', retrieve);

module.exports = router;
