const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
//include api routers
const apirouters = require('./api/routers/apiRouters');

//connect the mongodb database
const mongo = require('./db');
 mongoose.connect(mongo.db,{ useNewUrlParser: true }).then((d)=>{
     console.log('mongo db is connected');
    },
     error=>{console.log('error db',error);
    });

    
//enable crox roots and get params bodypart
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// enhance your app security with Helmet
app.use(helmet());

//allow the multiple method with header
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//call api url
app.use('/api',apirouters);

//call react index.html
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


//runt the port id
const  PORT  =  process.env.PORT ||  3030;
app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});