//include usersschema file
const usersschema = require('../models/usersschema');
//include secret key
const key = require('../secretkey');
//include jwt token
const jwt = require('jsonwebtoken');

//create register controllers
exports.register = (req,res)=>{
   
    //create user schema obj
   const usersdata = new  usersschema(req.body);

     //save data at tbl_users table
    usersdata.save(function(err,data){
       
         //check is true or not
        if(err){

            //error json response
            res.status(400).json({
                token:null,
                data:null,           
                message:'do not save data'
            });
        
        }else{
            //create jwt token
            let tokenjwt = jwt.sign({data},key.secret,{ expiresIn: '24h'});

            //successs json response
            res.status(200).json({
                token:tokenjwt,
                data:data,
                message:'save user data successfully'
            });

        }
       
      
     });

};



