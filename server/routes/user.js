const express = require('express');
const router = express.Router();
const login = require('../controllers/user/login');
const register = require('../controllers/user/register');

// /user/login
router.post('/login', login);

// /user/register
router.post('/register', register);

module.exports = router;
