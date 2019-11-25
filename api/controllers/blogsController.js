//add modelschema
const blogsSchema = require('../models/blogsschema');

//start controller function
exports.blogs = (req,res)=>{

   //create new schema object
   const  blogss = new blogsSchema(req.body);
   //mongo save data in database
    blogss.save(function(err,data){
       
        if(err){
            
        res.status(400).json({ 
            token:null,
            message:"no data found",
            data:null
            });

        }else{
            res.status(200).json({ 
                token:null,
                message:"data save successfuly",
                data:data
                });

        }


    });



}


//get all blogs
exports.allblogs = (req,res)=>{

//get mongo all blogs data
blogsSchema.find(function(err,data){

     if(err){

        res.status(400).json({
            token:null,
            data:null,
            message:"no data founds"
        });

     }else{

       res.status(200).json({
         token:null,
         data:data,
         message:"you have get all data successfuly"

    });


     }


});


}