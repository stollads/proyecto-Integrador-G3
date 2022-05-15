const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers = {
/* Renderizado de Formulario de registro */
    registerForm: function (req,res,next) {
        res.render("register", {title: "register"})
  },
/* Logica del registro de usuario */  
  processRegister: function (req, res) {
    // Aquí va la lógica del registro
  },
/* Renderizado de Formulario de login */
    loginForm: function(req, res, next){
      res.render("login", {title: "login"})
  },
/* Logica del login de usuario */    
  processLogin: function (req, res) {
    // Aquí va la lógica del login
  },
/* Renderizado de perfil */  
  profile: function (req, res) {
    // Aquí va la lógica del perfil
  },
/* Renderizado de formulario de edición */
  editForm: function (req, res) {
    // Aquí renderiza el formulario de edición de un usuario específico
  },
/* Logica de edicion */  
  processEdit: function (req, res) {
    // Aquí va la lógica de la edición de usuario
  },
/* Logica de eliminacion */    
  delete: function (req, res) {
    // Aquí va la lógica de eliminación de usuario
  },
}
module.exports = controllers;