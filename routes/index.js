var express = require('express');
var router = express.Router();
var controllers = require ("../controllers/mainControllers");
const validatorForm = require('../middlewares/validatorForm');
/* GET home page. */
router.get('/', controllers.index);
router.post('/', validatorForm, controllers.store);

module.exports = router;
