const {check,param} = require('express-validator')
module.exports = new class{
    registerValidator(){
        return[ 
            check('name').notEmpty().withMessage('name can`t be Empty'),
            check('email').notEmpty().withMessage('email can`t be Empty'),
            check('password').notEmpty().withMessage('password can`t be Empty'),
        ]
    }
    loginValidator(){
        return[ 
            check('email').notEmpty().withMessage('email can`t be Empty'),
            check('password').notEmpty().withMessage('password can`t be Empty'),
        ]
    }
};