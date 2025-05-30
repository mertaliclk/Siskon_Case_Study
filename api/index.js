const express = require('express');
const router = express.Router();
const userApi = require('./user.js');
router.use(userApi);

module.exports = router;