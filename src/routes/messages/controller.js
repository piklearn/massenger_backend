const Controller = require('./../controller');
const jwt = require('jsonwebtoken');
module.exports = new (class extends Controller{
    saveMassageController(req,res){
        const {from , to, text} = req.body
        const massage = this.Massage({from,to,text});
        massage.save().then(()=>{
            return this.response(res,[],'ok')
        })
        .catch((errors)=>{
            return this.response(res,errors,'bad request',400)
            
        })
    };
    
    getMassegesController(req, res){
        const from = req.params.with;
        const user_id = req.user.id;
        const to = jwt.sign(user_id,'asdkiojsefsdjksdjkfds');
        this.Massage.find({
            $or:[
                {from:from , to:to},
                {from:to,to:from}
            ]
        }).then((massages)=>{
            return res.json({
            massage:'ok',
            massages
        });
        }).catch((errors)=>{
            return res.status(400).json({
            massage:'bad request',
            errors
        });
        });    
    }
    getChats(req,res){
        console.log('1111111111111111111111111111111111111111111111');
        const user_id = req.user.id;
        const token = jwt.sign(user_id,'asdkiojsefsdjksdjkfds');
        console.log(token);
        this.Massage.find({$or:[
            {from:token},
            {to:token}
        ]}).select('from to').then(chats =>{
            var ids = [];
            chats.map(item=>{
                if (!ids.includes(item.from)){
                    ids.push(item.from)
                }
                if (!ids.includes(item.to)){
                    ids.push(item.to)
                }
            })
            return this.response(res,ids,'ok',200)
        }).catch(err=>{
            this.response(res,[],'error',400)
        });
    };
})();
