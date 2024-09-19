const {check,param} = require('express-validator');
module.exports = new class{
    massageValidator(){
        return[ 
        check('from').notEmpty().withMessage("field Can't be Empty"),
        check('to').notEmpty().withMessage("field Can't be Empty")]
    }
    massageUsersValidator(){
        return [
            param('with',"field Can't be Empty")
            ]
    }
};