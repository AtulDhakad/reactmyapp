//connect the mongo database
const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create obj mongoose schema 
const   contactschema =   new Schema({
    fname:{type:String},
    lname:{type:String},
    email:{type:String},
    description:{type:String},
    created_at:{type:Date,default:Date.now},
    updated_at:{type:Date,default:Date.now}
});

//call modules
module.exports = mongoose.model('tbl_contactus',contactschema);