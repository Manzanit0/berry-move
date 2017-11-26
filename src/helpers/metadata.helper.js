
'use strict';

const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unzip = require('unzip');

const jsforce = require('jsforce-metadata-tools');

const retrieve = async (path, metadata, options) => {
    const result = await jsforce.retrieveByTypes(metadata, options); 
    writeFile(path, new Buffer(result.zipFile, 'base64'));
    return result;
};

const deploy = async (path, options) => {
    const data = await readFile(path);
    return jsforce.deployFromZipStream(data, options);
};

module.exports = { deploy, retrieve };