const {body} = require('express-validator');

const validatorForm = [
    body('email')
    .isEmail()
    .withMessage('Debe ingresar un formato valido de Email'),
    
    body('password')
    .isEmpty()
    .withMessage('Debe ingresar una contraseña'),
]

module.exports = validatorForm