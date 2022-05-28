var express = require('express');
var router = express.Router();

var controllers = require ("../controllers/mainControllers");
const validatorForm = require('../middlewares/validatorForm');
const registerValidator = require('../middlewares/registerValidator')

/* GET home page. */
router.get('/', controllers.index);
router.post('/users/login', validatorForm, controllers.store);
router.post('/users/register', registerValidator, controllers.register)

module.exports = router;
