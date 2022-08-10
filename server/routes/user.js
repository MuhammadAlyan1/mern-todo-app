const express = require('express');
const router = express.Router();

const { login, signup } = require('../controllers/userController.js');

// /user/login
router.post('/login', login);

// /user/signup
router.post('/signup', signup);

module.exports = router;
