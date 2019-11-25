//connect the mongo database
const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create obj mongoose schema 
const   usersschema =   new Schema({
    fullname:{type:String},
    email:{type:String},
    password:{type:String},
    mobile:{type:String},
    address:{type:String},
    created_at:{type:Date,default:Date.now},
    updated_at:{type:Date,default:Date.now}
});

//call modules
module.exports = mongoose.model('tbl_users',usersschema);