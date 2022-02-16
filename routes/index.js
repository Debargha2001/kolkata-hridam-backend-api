const express = require('express');

const router = express.Router();

console.log('Router Loaded...');

router.use('/api', require('./api'));

module.exports = router;