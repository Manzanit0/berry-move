
'use strict';

const express = require('express'),
    router = express.Router();

const jsforce = require('jsforce-metadata-tools');

const login = async (req, res) => {
    const options = {
        username: req.body.username,
        password: req.body.password
    };

    try {
        const result = await jsforce.connect(options);
        res.status(200).send({instanceUrl: result.instanceUrl, accessToken: result.accessToken, orgInfo: result.userInfo})
    }
    catch(err) {
        es.status(500).send(err.toString());
    }
};

router.post('/login', login);

module.exports = router;
