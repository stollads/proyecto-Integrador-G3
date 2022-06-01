var express = require('express');
var router = express.Router();

var controllers = require ("../controllers/mainControllers");
//const loginValidator = require('../middlewares/loginValidator');
//const registerValidator = require('../middlewares/registerValidator')

/* GET home page. */
router.get('/', controllers.index);
//router.post('/users/login', loginValidator, controllers.login);
//router.post('/users/register', registerValidator, controllers.register)

module.exports = router;
