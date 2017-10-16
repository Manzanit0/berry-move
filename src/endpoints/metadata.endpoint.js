'use strict';

const express = require('express'),
    router = express.Router(),
    jsforce = require('jsforce-metadata-tools'),
    unzip = require('unzip')

const retrieve = (req, res) => {
    const options = {
        username: req.body.username,
        password: req.body.password,
        loginUrl: req.loginUrl,
        directory: req.unZipDir //TODO: this isn't correct. Check API.
    };

    jsforce.retrieveByTypes('ApexClass:MyClass', options) //TODO: The Metadata should come as a body JSON too.
        .then(results => {
            console.log(result);
            fs.createReadStream(result.zipFile).pipe(unzip.Extract({ path: './' }));
        })
        .catch(err => {
            console.log(err);
    });
};

router.get('/retrieve', retrieve);

module.exports = router;
