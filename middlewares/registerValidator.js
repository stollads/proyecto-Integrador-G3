const {body} = require('express-validator');

const registerValidator = [
    body('name')
    .isEmpty()
    .withMessage('Nombre: Debe ingresar un nombre')
    .isLength({min: 5}) 
    .withMessage('Nombre: Minimo 5 caracteres'),
    body('email')
    .isEmail()
    .withMessage('Email: Debe ingresar un formato valido de Email'),
    body('password')
    .isEmpty()
    .withMessage('Contraseña: Debe ingresar una contraseña')
    .isLength({min: 5})
    .withMessage('Contraseña: Minimo 5 caracteres'),
    body('direccion')
    .isEmpty()
    .withMessage('Direccion: Debe ingresar una direccion'),
]

module.exports = registerValidator