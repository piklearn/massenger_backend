const mongoos = require('mongoose');


const userSchema = new mongoos.Schema({
    name:String,
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    date: {type:Date , default:Date.now},
    isAdmin : {type:Boolean,default:false}
})

const User = mongoos.model('User',userSchema);


module.exports = User