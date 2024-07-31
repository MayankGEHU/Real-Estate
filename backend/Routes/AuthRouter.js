const { signup, login } = require('../Controllers/AuthController');
const { singupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const express = require('express');
const router = express.Router();

router.post('/login', loginValidation, login);
router.post('/signup', singupValidation, signup);


module.exports =  router;