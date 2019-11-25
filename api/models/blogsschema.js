const mongoose =require('mongoose');
const Schema = mongoose.Schema;

 const blogsschema = new Schema({
     blogName:{type:String},
     createById:{type:String},
     description:{type:String},
     blogImage:{type:String},
     createdDate:{type:Date,default:Date.now},
     updatedDate:{type:Date,default:Date.now}
     
 });

module.exports = mongoose.model('tbl_blogs',blogsschema);