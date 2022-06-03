var express = require('express');
var router = express.Router();
var controllers = require ("../controllers/usersControllers");
var upload = require('../middlewares/multerUsers')
const registerValidator = require('../middlewares/registerValidator')
const loginValidator = require('../middlewares/loginValidator');

/* Formulario de Registro */
router.get("/register", controllers.registerForm);
router.post("/register", upload.single('avatar'), registerValidator, controllers.processRegister);

/* Login */
router.get("/login" , controllers.loginForm);
router.post("/login", /* loginValidator, */ controllers.processLogin);

/* Perfil */
router.get("/profile", controllers.profile);

/* Edición de usuario */
// router.get("/edit/:id", controllers.editForm);
// router.put("/edit/:id", controllers.processEdit);

/* Eliminación de usuario */
// router.get("/delete", controllers.delete);


module.exports = router;

