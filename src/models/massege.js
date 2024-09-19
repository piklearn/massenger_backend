const mongoos = require('mongoose');

const massegeSchema = new mongoos.Schema({
    from:String,
    to:String,
    text:String,
    date: {type:Date , default:Date.now},
})

const Massage = mongoos.model('Massage',massegeSchema);


module.exports = Massage