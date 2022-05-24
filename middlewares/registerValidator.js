const {body} = require('express-validator');

const registerValidator = [
    body('email')
    .isEmpty()
    .withMessage('Debe ingresar un formato valido de Email'),
    
    body('password')
    .isEmpty()
    .withMessage('Debe ingresar una contraseña'),
   
    body('direccion')
    .isEmpty()
    .withMessage('Debe ingresar una direccion'),
]

module.exports = registerValidator