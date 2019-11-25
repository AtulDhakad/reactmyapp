//include usersschema file
const usersschema = require('../models/usersschema');
//include secret key
//const key = require('../secretkey');
//include jwt token
//const jwt = require('jsonwebtoken');
//var  nodeMailer = require('nodemailer');
//const sgMail = require('@sendgrid/mail');
//create register controllers
exports.allusers = (req,res)=>{

     //find data at tbl_users table
     usersschema.find(function(err,data){
       
     //check is true or not
      if(err){ 

            //error json response
            res.status(400).json({
                data:null,           
                message:'do not save data'
            });
        
        }else{
     
            //successs json response
            res.status(200).json({
                data:data,
                message:'all user data successfully'
            });

        }
       
      
     });

};


exports.delete = (req,res)=>{
   
    usersschema.findByIdAndRemove({_id: req.params.id},function(err,data){
       
         //check is true or not
        if(err){

            //error json response
            res.status(400).json({
                token:null,
                data:null,           
                message:'not delete record'
            });
        
        }else{
   
            //successs json response
            res.status(200).json({
                token:null,
                data:data,
                message:'delete record successfully'
            });

        }
       
      
     });

};

