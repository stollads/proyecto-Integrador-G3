const {body} = require('express-validator');

module.exports = [
 body('email')
 .isEmail()
 .withMessage('Debe ingresar un formato valido de Email'),
 
 body('password')
 .notEmpty()
 .withMessage('Debe ingresar una contraseña'),
]