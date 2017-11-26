'use strict';

const express = require('express'),
    router = express.Router(),
    metadataHelper = require('../helpers/metadata.helper');

const retrieve = (req, res) => {
    const options = {
        username: req.body.username,
        password: req.body.password
    };

    metadataHelper.retrieve('./package.zip', res.body.metadata, options)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err));
};

const deploy = (req, res) => {
    const options = {
        username: req.body.username,
        password: req.body.password
    };

    metadataHelper.deploy('./package.zip', options)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err));
};

const deployBetweenOrgs = async (req, res) => {
    const originOptions = {
        username: req.body.originUsername,
        password: req.body.originPassword
    };

    const destOptions = {
        username: req.body.destinationUsername,
        password: req.body.destinationPassword
    };

    try {
        const retrieveResult = await metadataHelper.retrieve('./package.zip', req.body.metadata, originOptions);
        const deployResult = await metadataHelper.deploy('./package.zip', destOptions);

        res.status(200).send({retrieve: retrieveResult, deploy: deployResult});
    }
    catch(err){
        console.log(err);
        res.status(500).send({message: err.toString()});
    }
};

router.post('/retrieve', retrieve);
router.post('/deploy', deploy);
router.post('/fullDeploy', deployBetweenOrgs);

module.exports = router;
