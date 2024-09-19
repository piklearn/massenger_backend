const controller = require('./controller');
const validator = require('./validator');
const express = require('express')
const router = express.Router();

router.post('/register',
        validator.registerValidator(),
        controller.validate,
        controller.register)

router.post('/login',
        validator.loginValidator(),
        controller.validate,
        controller.login)

module.exports = router