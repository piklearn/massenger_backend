const controller = require('./controller');
const validator = require('./validator');
const express = require('express');
const mwr = require('./../../middlewares/auth');
const router = express.Router();

router.post('',
            validator.massageValidator(),
            controller.validate,
    controller.saveMassageController);

    
router.get('/chats',
        mwr.isLoggined,
        controller.getChats)
        
router.get('/:with',
validator.massageUsersValidator(),
controller.validate,
mwr.isLoggined,
    controller.getMassegesController);
module.exports = router;