
//include express
var express    = require('express'); 
var app = express();
//connect express routers
var router = express.Router(); 
//include controllers
const loginCon = require('../controllers/loginController');
const registerCon = require('../controllers/registerController');
const users = require('../controllers/usersController');
const contactCon = require('../controllers/contactController');
//include middleware
const tokenv = require('../middlewares/tokencheck');
//blogs controller
const blogsCon = require('../controllers/blogsController');


//create all routers
//register
router.post('/register',[registerCon.register]);
//login
router.post('/login',[loginCon.login]);
//user all
router.get('/allusers',tokenv.checkToken,users.allusers);
router.get('/usersdelete/:id',tokenv.checkToken,users.delete);
router.post('/mailsend',[contactCon.mailsend]);
//all get contact list
router.get('/allcontactlist',tokenv.checkToken,contactCon.allcontactlist);
//delete
router.get('/contactdelete/:id',tokenv.checkToken,contactCon.delete);
//create blogs
router.post('/blogspost',tokenv.checkToken,blogsCon.blogs);
//get all blogs data
router.get('/allblogs',tokenv.checkToken,blogsCon.allblogs);

router.get('/test', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!'});   
});


module.exports = router;