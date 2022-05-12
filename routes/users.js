var express = require('express');
var router = express.Router();
var controllers = require ("../controllers/usersControllers");
/* GET home page. */

router.get("/register", controllers.registro);

router.get("/login", controllers.login);

//FALTA LA VISTA DE PERFIL

module.exports = router;

