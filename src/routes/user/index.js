const controller = require('./controller');
const validator = require('./validator');
const express = require('express')
const router = express.Router();
const mwr = require('./../../middlewares/auth');

router.get('/me',
        controller.validate,
        mwr.isLoggined,
        controller.getUser)

router.get('/:token',
        validator.idValidator(),
        controller.validate,
        mwr.isLoggined,
        controller.get_contact)

module.exports = router