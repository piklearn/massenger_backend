const Controller = require('../controller');
const jwt = require('jsonwebtoken');
class controller extends Controller{
    async register(req,res){
        const {name,email,password} = req.body;
        let user = await this.User.findOne({email});
        if(!user){
            user = await this.User({name,email,password});
            const result = await user.save();
            const token = jwt.sign(result.id, 'asdkiojsefsdjksdjkfds');
            return this.response(res,token,'ok');       
        }
       return this.response(res,[],'this email registered',400)
}
        
    async login(req,res){
        const {email,password} = req.body;
        let user = await this.User.findOne({email,password});
        if (!user){
        return this.response(res,user,'User not found',400)
        }
        const token = jwt.sign(user.id,'asdkiojsefsdjksdjkfds');
        return this.response(res,token,'ok');
    }

}
module.exports = new controller();


