const jwt = require('jsonwebtoken');
const User = require('./../models/user');

async function isLoggined(req, res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(400).send('access denied');
    try{
        const decoded = jwt.decode(token,'asdkiojsefsdjksdjkfds');
        const user = await User.findById(decoded);
        if(!user){
            return res.status(400).send('user not found');
        }
        req.user = user;
        next()
    }    
    catch(ex){
        return res.status(400).send('token not valid');
    }
}


async function isAdmin(req,res,next){
    const user = req.user;
    if (user.isAdmin){
        next()
    }
    res.send(400).send('access denied')
}

module.exports = {
    isAdmin,
    isLoggined
}