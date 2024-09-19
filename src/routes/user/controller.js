const Controller = require('./../controller');
const jwt = require('jsonwebtoken');
class controller extends Controller{
    
   async getUser(req,res){
      const user = await this.User.findById(req.user._id);
      if (!user){
         return this.response(res,[],'User not found',400)
      }
         return this.response(res,{
          user  
         },'ok');
}
async getUser(req,res){
   const user = await this.User.findById(req.user._id);
   if (!user){
      return this.response(res,[],'User not found',400)
   }
      return this.response(res,{
       user  
      },'ok');
}
async get_contact(req,res){
      const token = req.params.token   
      const id = jwt.decode(token);
      const user = await this.User.findById(id);
      if (!user){
         return this.response(res,[],'User not found',404)
      }
      const {name} = user;
         return this.response(res,{
            name  
         },'ok');
}
}
module.exports = new controller();


