const Massage = require('./../models/massege');
const User = require('./../models/user');
const autoBind = require('auto-bind');
const {validationResult} = require('express-validator');
module.exports = class {
    constructor(){
        autoBind(this);
        this.User = User;
        this.Massage = Massage;
    }
    valditionBody(req,res){
        const result = validationResult(req);
        if (!result.isEmpty()){
            const errors = result.array();
            res.status(400).json({
                errors,
                Massage:'valtion error'
            })
            return false
        }
        return true
    }
    validate(req,res,next){
        if(!this.valditionBody(req,res)){
            return;
        }
        next();
    }
    response(res,data,massege,code=200){
        return res.status(code).json({
            massege,
            data
        })
    }
}