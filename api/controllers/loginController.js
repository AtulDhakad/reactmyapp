//include usersschema
const usersschema = require('../models/usersschema');
//include jwt token
const jwt = require('jsonwebtoken');
//include secret key
const key = require('../secretkey');

//create login controller 
exports.login = (req,res)=>{
 
  //create userschema obj
  usersschema.findOne({email:req.body.email,password:req.body.password},function(error,data){
    
        //check the condion error true or not
        if(data){

            //create jwt token
        let tokenjwt = jwt.sign({data},key.secret,{expiresIn:'24h'});

        res.status(200).json({
           token:tokenjwt,
            data:data,
            message:'user login successfully'
        });
        
        }else{
            res.status(200).json({
                token:null,
                data:null,
                message:'user credentials  are not valid, please try again later.'
            });
           
        }

  });

    


};