const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const deployedRoutesDir = path.join(__dirname, 'deployed_api');

fs.readdirSync(deployedRoutesDir)
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
        const routePath = path.join(deployedRoutesDir, file);
        const route = require(routePath);
        router.use('/', route);
    });

module.exports = router;
