//include usersschema file
const contactschema = require('../models/contactschema');
//include secret key
const sgMail = require('@sendgrid/mail');


//mail send to nodemailer
exports.mailsend = (req,res)=>{
   
    //create user schema obj
   const contactdata = new  contactschema(req.body);

     //save data at tbl_users table
     contactdata.save(function(err,data){
       
         //check is true or not
        if(err){

            //error json response
            res.status(400).json({
                token:null,
                data:null,           
                message:'do not save data'
            });
        
        }else{
          
            sgMail.setApiKey('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');
            const msg = {
              to: 'atul.linux01@gmail.com',
              from: 'atul.linux01@gmail.com',
              subject: 'Sending with Twilio SendGrid is Fun',
             // text: 'and easy to do anywhere, even with Node.js',
              html: '<strong>First Name:'+req.body.fname+'</strong><br>'+
                  '<strong>Last Name:'+req.body.lname+'</strong><br>'+
                  '<strong>Email:'+req.body.email+'</strong><br>'+
                  '<strong>Description :'+req.body.description+'</strong>'
                  ,
            };
           const resmain =  sgMail.send(msg);

            //successs json response
            res.status(200).json({
                token:resmain,
                data:null,
                message:'save user data successfully'
            });

        }
       
      
     });

};


//all gets contactus list
exports.allcontactlist = (req,res)=>{

    //find data at tbl_users table
    contactschema.find(function(err,data){
      
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
               message:'all contact list data successfully'
           });

       }
      
     
    });

};



exports.delete = (req,res)=>{
   
    contactschema.findByIdAndRemove({_id: req.params.id},function(err,data){
       
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


