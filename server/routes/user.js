const express = require('express');
const router = express.Router();
const login = require('../controllers/user/login');
const signup = require('../controllers/user/signup');

// /user/login
router.post('/login', login);

// /user/signup
router.post('/signup', signup);

module.exports = router;
